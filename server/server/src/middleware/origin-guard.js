const MUTATING_METHODS = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);

/**
 * Adds an explicit Origin check to state-changing API requests.
 * Requests from command-line tools and trusted server-to-server clients may
 * omit Origin; browser requests from an unapproved origin are rejected.
 */
export function createOriginGuard(allowedOrigins) {
  const allowed = new Set(
    allowedOrigins.map((origin) => String(origin).trim().replace(/\/$/, '')).filter(Boolean),
  );

  return function originGuard(request, response, next) {
    if (!MUTATING_METHODS.has(request.method)) return next();

    const origin = request.headers?.origin;
    const fetchSite = request.headers?.['sec-fetch-site'];

    if (!origin && fetchSite === 'cross-site') {
      return response.status(403).json({ error: 'Cross-site requests are not allowed.' });
    }

    if (origin && !allowed.has(String(origin).replace(/\/$/, ''))) {
      return response.status(403).json({ error: 'Origin is not allowed.' });
    }

    return next();
  };
}
