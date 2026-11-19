const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/+$/, '');

// Use the same-origin /api path by default. Vite proxies it to the local
// Express server during development; Vercel proxies it to the hosted API.
export const authApiBaseUrl = configuredApiBase || '/api';

export function authApiUrl(path: string): string {
  return `${authApiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
