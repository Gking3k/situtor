import { app } from './app.js';
import { env } from './config/env.js';
import { pool } from './db/pool.js';

let server;
let shuttingDown = false;

async function start() {
  // Fail fast if the configured PostgreSQL server cannot be reached.
  await pool.query('SELECT 1');

  server = app.listen(env.port, '0.0.0.0', () => {
    console.log(`[api] Si Tutor API listening on port ${env.port}`);
    console.log(`[api] Environment: ${env.nodeEnv}`);
  });

  server.on('error', (error) => {
    console.error('[api] HTTP server error:', error.message);
    process.exitCode = 1;
  });
}

async function shutdown(signal) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.log(`[api] ${signal} received. Shutting down gracefully.`);

  try {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => (error ? reject(error) : resolve()));
      });
    }
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('[api] Shutdown error:', error.message);
    process.exit(1);
  }
}

process.once('SIGINT', () => void shutdown('SIGINT'));
process.once('SIGTERM', () => void shutdown('SIGTERM'));

start().catch(async (error) => {
  console.error('[api] Startup failed:', error.message);
  await pool.end().catch(() => {});
  process.exit(1);
});
