/**
 * Production registration can be closed, limited to explicit test addresses,
 * or opened for public use after transactional email is verified.
 */
export function isRegistrationAllowed({ mode, email, allowedEmails = [] }) {
  if (mode === 'enabled') return true;
  if (mode !== 'allowlist' || typeof email !== 'string') return false;

  const normalizedEmail = email.trim().toLowerCase();
  return allowedEmails.some(
    (allowedEmail) => typeof allowedEmail === 'string' && allowedEmail.trim().toLowerCase() === normalizedEmail,
  );
}
