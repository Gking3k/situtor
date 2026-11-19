const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validatePasswordResetRequest(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Enter the email address for your Si Tutor account.' };
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { error: 'Enter a valid email address.' };
  }

  return { value: { email } };
}

export function validatePasswordReset(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'The password reset details are incomplete.' };
  }

  const token = typeof body.token === 'string' ? body.token.trim() : '';
  const password = typeof body.password === 'string' ? body.password : '';

  if (!/^[a-f0-9]{64}$/.test(token)) {
    return { error: 'This password-reset link is invalid or has expired.' };
  }
  if (password.length < 12 || password.length > 128) {
    return { error: 'Your new password must be between 12 and 128 characters.' };
  }

  return { value: { token, password } };
}
