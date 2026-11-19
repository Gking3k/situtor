import { env } from '../config/env.js';

export const SESSION_COOKIE_NAME = 'si_tutor_session';
export const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

export function readCookie(request, name) {
  const header = request.headers.cookie;
  if (typeof header !== 'string') return null;

  for (const part of header.split(';')) {
    const separator = part.indexOf('=');
    if (separator < 0) continue;
    const key = part.slice(0, separator).trim();
    if (key !== name) continue;

    const rawValue = part.slice(separator + 1).trim();
    try {
      return decodeURIComponent(rawValue);
    } catch {
      return null;
    }
  }
  return null;
}

function cookieAttributes(maxAge) {
  const attributes = [
    'Path=/',
    'HttpOnly',
    `SameSite=${env.authCookieSameSite}`,
    `Max-Age=${maxAge}`,
  ];
  if (env.authCookieSecure) attributes.push('Secure');
  return attributes.join('; ');
}

export function setSessionCookie(response, token) {
  response.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=${encodeURIComponent(token)}; ${cookieAttributes(SESSION_MAX_AGE_SECONDS)}`,
  );
}

export function clearSessionCookie(response) {
  response.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE_NAME}=; ${cookieAttributes(0)}`,
  );
}
