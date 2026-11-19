const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateRegistrationInput(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { error: 'Please provide your name, email address and password.' };
  }

  const fullName = typeof body.fullName === 'string' ? body.fullName.trim().replace(/\s+/g, ' ') : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';

  if (fullName.length < 2 || fullName.length > 100) {
    return { error: 'Your full name must be between 2 and 100 characters.' };
  }

  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return { error: 'Enter a valid email address.' };
  }

  if (password.length < 12 || password.length > 128) {
    return { error: 'Your password must be between 12 and 128 characters.' };
  }

  return { value: { fullName, email, password } };
}
