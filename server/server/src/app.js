import cors from 'cors';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';
import { env } from './config/env.js';
import { errorHandler, notFoundHandler } from './middleware/error-handler.js';
import { createOriginGuard } from './middleware/origin-guard.js';
import healthRoutes from './routes/health.routes.js';
import authRoutes from './routes/auth.routes.js';

export const app = express();

if (env.trustProxy > 0) {
  app.set('trust proxy', env.trustProxy);
}

app.disable('x-powered-by');
app.use(helmet());
app.use(createOriginGuard(env.clientOrigins));
app.use(cors({
  origin(origin, callback) {
    // Non-browser clients and same-origin requests do not send an Origin header.
    if (!origin || env.clientOrigins.includes(origin.replace(/\/$/, ''))) {
      return callback(null, true);
    }
    return callback(new Error('Origin is not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 600,
}));
app.use(express.json({ limit: '25kb' }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});

app.use('/api', apiLimiter);
app.use('/api/health', healthRoutes);
app.use('/api/auth', authRoutes);
app.use(notFoundHandler);
app.use(errorHandler);
