# Student accounts — Phase 4.4: Registration

## Registration API (4.4A)

- Added `POST /api/auth/register` to the Express API.
- Validates and normalizes the student's full name and email address.
- Requires a password between 12 and 128 characters.
- Hashes passwords using Node.js `crypto.scrypt` with a fresh random salt for every account; the plaintext password is never stored or returned.
- Uses a parameterized PostgreSQL insert into `public.students`.
- Returns only the student's public profile fields; password hashes are never returned.
- Handles duplicate email addresses using the case-insensitive unique index.
- Applies a registration-specific rate limit and `Cache-Control: no-store` response header.
- Includes Node's built-in tests for password hashing/verification and input validation.

## Registration page (4.4B)

- Adds the `/register` route to the React application.
- Adds a registration call-to-action to the shared desktop and mobile navigation.
- Collects full name, email, password and password confirmation.
- Validates the form before sending it to `POST /api/auth/register`.
- Uses `VITE_API_BASE_URL` for the API address; local development defaults to `http://localhost:4000/api`.
- Shows loading, validation, server-error and account-created states.
- Does not store passwords or automatically sign the student in.

## Important boundary

At the end of Phase 4.4, newly created accounts were unverified and could not sign in. Phase 4.5 below adds local verification, login and sessions. The feature remains for local development/testing; do not open public registration until production email delivery, hosting, account recovery, cross-device tests and the final privacy notice are complete.

## Local checks

Frontend, from the project root:

```bash
npm ci
npm run typecheck
npm run build
```

Create `.env.local` from `.env.example` if you need to override the local API base URL. Vite exposes `VITE_` variables in client code, so never put database credentials or private keys in them.

Backend, from `server/`:

```bash
npm ci
npm run check
npm test
npm run dev
```

The backend needs a private `server/.env` containing local PostgreSQL credentials. Copy `server/.env.example` and enter the values privately. Never commit or upload `server/.env`.

Test the frontend at `http://localhost:5173/register` while the API is running at `http://localhost:4000` and CORS allows the frontend origin.

## Still outstanding after Phase 4.5

- Production transactional email configuration and delivery testing.
- Password recovery.
- Student dashboard and profile management.
- Public production deployment of the account API.
- Cross-device session testing and final privacy-notice review.


## Phase 4.5 — Email verification and sign-in implementation

The account API now supports the following local-development flow:

- Registration creates a student and a hashed, single-use, 24-hour email-verification token.
- With no email provider configured in development, the API returns a local verification URL for manual testing. This development-only URL is never returned in production.
- Production registration requires a configured transactional email provider. The current adapter uses the Resend REST API with server-only `RESEND_API_KEY` and `EMAIL_FROM` settings. The sender domain must be verified with the provider before production delivery.
- `POST /api/auth/verify-email` validates and consumes the one-time token and marks the student email as verified.
- `POST /api/auth/resend-verification` issues a replacement link, using a generic success response to avoid account enumeration.
- `POST /api/auth/login` only permits verified accounts and creates a seven-day session.
- Session tokens are random 256-bit values; only SHA-256 token hashes are stored in `student_sessions`. The browser receives an HttpOnly cookie.
- `GET /api/auth/me` checks the active session; `POST /api/auth/logout` revokes it and clears the cookie.
- Frontend routes are `/verify-email` and `/login`. Login checks an existing cookie on page load to demonstrate session persistence.

For local development, leave `RESEND_API_KEY` and `EMAIL_FROM` empty. The API returns a development-only verification link in the registration/resend response. For production, configure a Resend API key, a sender address on a verified domain, `APP_BASE_URL`, the deployed frontend in `CLIENT_ORIGIN`, and `AUTH_COOKIE_SAME_SITE=none` plus `AUTH_COOKIE_SECURE=true` when frontend and API are on separate sites using HTTPS. Never expose the Resend key through a `VITE_` variable.

Login, verification, and session endpoints are implemented but must be tested against the local PostgreSQL database and deployed API before student access is enabled publicly. Password recovery and the student dashboard remain outstanding.
