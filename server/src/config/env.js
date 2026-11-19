import 'dotenv/config';

function readInteger(name, fallback, { min = 1, max = 65535 } = {}) {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === '') return fallback;

  const value = Number(raw);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`${name} must be an integer between ${min} and ${max}.`);
  }
  return value;
}

function readBoolean(name, fallback = false) {
  const raw = process.env[name];
  if (raw === undefined || raw.trim() === '') return fallback;
  if (['true', '1', 'yes'].includes(raw.toLowerCase())) return true;
  if (['false', '0', 'no'].includes(raw.toLowerCase())) return false;
  throw new Error(`${name} must be true or false.`);
}

const databaseUrl = process.env.DATABASE_URL?.trim();
const discreteDatabaseConfig = {
  host: process.env.DB_HOST?.trim(),
  port: readInteger('DB_PORT', 5432),
  database: process.env.DB_NAME?.trim(),
  user: process.env.DB_USER?.trim(),
  password: process.env.DB_PASSWORD,
};

if (!databaseUrl) {
  const missing = ['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'].filter((key) => {
    const value = process.env[key];
    return value === undefined || value === '';
  });

  if (missing.length > 0) {
    throw new Error(
      `Database configuration is incomplete. Set DATABASE_URL or provide: ${missing.join(', ')}. ` +
      'Copy server/.env.example to server/.env and fill in your local PostgreSQL connection details.',
    );
  }
}

const nodeEnv = process.env.NODE_ENV || 'development';
const registrationMode = (process.env.REGISTRATION_MODE || (nodeEnv === 'production' ? 'closed' : 'enabled'))
  .trim()
  .toLowerCase();
if (!['closed', 'allowlist', 'enabled'].includes(registrationMode)) {
  throw new Error('REGISTRATION_MODE must be closed, allowlist or enabled.');
}
const registrationTestEmails = (process.env.REGISTRATION_TEST_EMAILS || '')
  .split(',')
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);
if (registrationMode === 'allowlist' && registrationTestEmails.length === 0) {
  throw new Error('REGISTRATION_TEST_EMAILS must contain at least one address when REGISTRATION_MODE=allowlist.');
}
const clientOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean);

if (clientOrigins.length === 0) {
  throw new Error('CLIENT_ORIGIN must contain at least one allowed frontend origin.');
}

for (const origin of clientOrigins) {
  let parsedOrigin;
  try {
    parsedOrigin = new URL(origin);
  } catch {
    throw new Error('Every CLIENT_ORIGIN entry must be a valid absolute origin.');
  }
  if (!['http:', 'https:'].includes(parsedOrigin.protocol) || parsedOrigin.origin !== origin) {
    throw new Error('CLIENT_ORIGIN entries must contain only an origin (scheme, host and optional port).');
  }
  if (nodeEnv === 'production' && parsedOrigin.protocol !== 'https:') {
    throw new Error('Every CLIENT_ORIGIN must use HTTPS in production.');
  }
}

const appBaseUrl = (process.env.APP_BASE_URL || clientOrigins[0]).trim().replace(/\/$/, '');
let parsedAppBaseUrl;
try {
  parsedAppBaseUrl = new URL(appBaseUrl);
} catch {
  throw new Error('APP_BASE_URL must be a valid absolute URL.');
}
if (!['http:', 'https:'].includes(parsedAppBaseUrl.protocol) || parsedAppBaseUrl.origin !== appBaseUrl) {
  throw new Error('APP_BASE_URL must contain only an origin (scheme, host and optional port).');
}
if (nodeEnv === 'production' && parsedAppBaseUrl.protocol !== 'https:') {
  throw new Error('APP_BASE_URL must use HTTPS in production.');
}

if (nodeEnv === 'production' && !process.env.AUTH_COOKIE_SAME_SITE?.trim()) {
  throw new Error('Set AUTH_COOKIE_SAME_SITE explicitly in production (Lax for same-site frontend/API subdomains; None only when cross-site cookies are required).');
}
const authCookieSameSite = (process.env.AUTH_COOKIE_SAME_SITE || 'lax').toLowerCase();
if (!['lax', 'strict', 'none'].includes(authCookieSameSite)) {
  throw new Error('AUTH_COOKIE_SAME_SITE must be lax, strict or none.');
}
const authCookieSecure = readBoolean('AUTH_COOKIE_SECURE', nodeEnv === 'production' || authCookieSameSite === 'none');
if (authCookieSameSite === 'none' && !authCookieSecure) {
  throw new Error('AUTH_COOKIE_SECURE must be true when AUTH_COOKIE_SAME_SITE=none.');
}
if (nodeEnv === 'production' && !authCookieSecure) {
  throw new Error('AUTH_COOKIE_SECURE must be true in production.');
}

export const env = Object.freeze({
  nodeEnv,
  registrationMode,
  registrationTestEmails,
  port: readInteger('PORT', 4000),
  clientOrigins,
  appBaseUrl,
  resendApiKey: process.env.RESEND_API_KEY?.trim() || '',
  emailFrom: process.env.EMAIL_FROM?.trim() || '',
  authCookieSameSite: authCookieSameSite[0].toUpperCase() + authCookieSameSite.slice(1),
  authCookieSecure,
  trustProxy: readInteger('TRUST_PROXY', 0, { min: 0, max: 10 }),
  database: Object.freeze({
    ...(databaseUrl ? { connectionString: databaseUrl } : discreteDatabaseConfig),
    ssl: readBoolean('DATABASE_SSL', false)
      ? { rejectUnauthorized: readBoolean('DATABASE_SSL_REJECT_UNAUTHORIZED', true) }
      : false,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  }),
});
