export function notFoundHandler(_request, response) {
  response.status(404).json({ error: 'API route not found.' });
}

export function errorHandler(error, _request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  if (error?.message === 'Origin is not allowed by CORS') {
    return response.status(403).json({ error: 'Origin is not allowed.' });
  }

  const statusCode = Number.isInteger(error?.statusCode) && error.statusCode >= 400 && error.statusCode < 500
    ? error.statusCode
    : 500;

  if (statusCode >= 500) {
    console.error('[api] Request failed:', error?.message || 'Unknown error');
  }

  return response.status(statusCode).json({
    error: statusCode >= 500
      ? 'An unexpected server error occurred.'
      : error.message,
  });
}
