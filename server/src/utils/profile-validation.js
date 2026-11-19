export function validateProfileUpdate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Enter the name you want shown on your account.' };
  }

  const fullName = typeof body.fullName === 'string'
    ? body.fullName.trim().replace(/\s+/g, ' ')
    : '';

  if (fullName.length < 2 || fullName.length > 100) {
    return { error: 'Your name must be between 2 and 100 characters.' };
  }

  if (/[\u0000-\u001f\u007f]/.test(fullName)) {
    return { error: 'Your name contains characters that cannot be used.' };
  }

  return { value: { fullName } };
}
