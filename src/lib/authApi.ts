const configuredApiBase = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/+$/, '');

export const authApiBaseUrl = configuredApiBase || (import.meta.env.DEV ? 'http://localhost:4000/api' : '');

export function authApiUrl(path: string): string {
  return `${authApiBaseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
