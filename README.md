# Si Tutor

Si Tutor is a responsive learning platform built around the SS1 Chemistry curriculum. The existing React learning experience remains at the project root. Student-account work adds a separate Express API and PostgreSQL database without moving lessons or quizzes out of the curriculum source files.

## Project structure

```text
si-tutor/
├── src/                  # React + TypeScript frontend and Chemistry curriculum
├── public/               # Static assets, favicon and lesson images
├── docs/                 # Curriculum, design, review and implementation notes
├── server/               # Separate Express API
│   ├── src/              # API routes, database pool, middleware and utilities
│   ├── test/             # API utility tests
│   ├── .env.example      # Safe local configuration template
│   └── package.json      # API scripts and dependencies
├── package.json          # Frontend scripts and dependencies
├── package-lock.json     # Frontend dependency lockfile
└── README.md             # Project setup and status (this file)
```

There is one project README at the repository root. Supporting technical and curriculum reviews are kept in `docs/`.

## Requirements

- Node.js 20.19 or newer
- npm 10 or newer
- PostgreSQL for local API development
- pgAdmin is optional and can be used to manage the PostgreSQL database

## Frontend setup

Run these commands from the project root (`si-tutor/`):

```bash
npm install
npm run dev
```

Vite serves the frontend at `http://localhost:5173` by default.

Frontend validation:

```bash
npm run typecheck
npm run build
```

## Student account development

Student registration, email-verification flow, sign-in and persistent HTTP-only sessions are implemented for local development. The React `/register` page calls the Express API; `/verify-email` confirms the one-time email token; `/login` establishes a seven-day session. Passwords are scrypt-hashed, and only token hashes are stored in PostgreSQL.

The local frontend uses `http://localhost:4000/api` by default while running under Vite. To override the API address, copy the root `.env.example` to `.env.local` and set `VITE_API_BASE_URL`. Only public configuration belongs in `VITE_` variables; never put a database password, service-role key or other secret in a Vite environment variable.

**Public registration is not enabled yet.** Registration, verification, login, session management, password recovery, the student dashboard and account settings have been implemented for local testing. Complete the hosted API connection, same-origin Vercel proxy, production email delivery, deployed end-to-end testing and final privacy/security review before enabling public registration.

## Backend and PostgreSQL setup

The Express API is a separate application in `server/`. Run backend commands from that directory, not from the project root.

### 1. Configure the local database connection

The development database used for this project is named `si_tutor`. The initial student-account schema contains:

- `students` — student profile, normalized email uniqueness and password hash
- `student_sessions` — hashed session-token records and expiry/revocation state
- `student_email_verification_tokens` — hashed, expiring email-verification tokens
- `student_password_reset_tokens` — hashed, expiring password-reset tokens

In pgAdmin, make sure the PostgreSQL server is running and the `si_tutor` database contains these four tables.

From the project root, create the private API environment file:

**Git Bash**

```bash
cp server/.env.example server/.env
```

**Windows PowerShell**

```powershell
Copy-Item server/.env.example server/.env
```

Edit `server/.env` and set `DB_PASSWORD` to the password for the PostgreSQL role shown in pgAdmin. Confirm the host, port, database and username in **pgAdmin → right-click the server → Properties → Connection**. Typical local values are `localhost`, port `5432`, database `si_tutor` and user `postgres`; use the values configured on your machine.

Never commit or share `server/.env`. It contains your database password. The `.env.example` file contains placeholders only and is safe to keep in the repository.

### 2. Install and run the API

From the project root:

```bash
cd server
npm install
npm run check
npm test
npm run dev
```

The API listens at `http://localhost:4000` by default. Keep this terminal running while testing the frontend or API. Run the frontend in a second terminal from the project root.

### 3. Verify the API and database

Open:

- `http://localhost:4000/api/health` — confirms that the API is running.
- `http://localhost:4000/api/health/db` — confirms the PostgreSQL connection and the four required student tables.

A successful database response is:

```json
{
  "status": "ok",
  "database": "connected",
  "studentSchema": "ready"
}
```

### Backend environment variables

| Variable | Purpose | Local default |
|---|---|---|
| `DB_HOST` | PostgreSQL hostname | `localhost` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_NAME` | Database name | `si_tutor` |
| `DB_USER` | PostgreSQL role | `postgres` |
| `DB_PASSWORD` | PostgreSQL role password | Set privately in `server/.env` |
| `DATABASE_URL` | Optional full database connection string | Not set |
| `DATABASE_SSL` | Enable TLS for a hosted database | `false` |
| `DATABASE_SSL_REJECT_UNAUTHORIZED` | Verify the hosted database certificate | `true` |
| `PORT` | API listening port | `4000` |
| `NODE_ENV` | Runtime environment | `development` |
| `CLIENT_ORIGIN` | Allowed frontend origin(s), comma-separated | `http://localhost:5173` |
| `TRUST_PROXY` | Number of trusted reverse proxies | `0` |

For a hosted database, use the provider's connection details and SSL requirements. A production API cannot connect to a PostgreSQL server running only on your laptop by using `localhost`.

## Student registration API — current account-development status

The current API includes:

- `POST /api/auth/register` — validates student details, stores a scrypt password hash, creates a 24-hour verification token and sends a verification email (or returns a development-only link when email delivery is not configured locally).
- `POST /api/auth/verify-email` — consumes a single-use token and verifies the student email.
- `POST /api/auth/resend-verification` — issues a replacement verification link without revealing whether an account exists.
- `POST /api/auth/login` — authenticates verified students and issues a seven-day HttpOnly session cookie.
- `GET /api/auth/me` — returns the current student for an active session.
- `POST /api/auth/logout` — revokes the session and clears the cookie.
- `POST /api/auth/forgot-password` — creates a one-hour, single-use reset token without revealing whether an email address has an account.
- `POST /api/auth/reset-password` — validates the reset token, updates the password hash, consumes outstanding reset tokens and revokes all active student sessions.
- Password hashing and verification utilities.
- Duplicate-email handling (`409 Conflict`) and invalid-input handling (`400 Bad Request`).
- A registration-specific rate limit and `Cache-Control: no-store` response.
- Health and database-readiness endpoints.

Example development request (use only test details, never a real personal password):

```bash
curl -i -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Demo Student","email":"demo.student@example.test","password":"A long development passphrase"}'
```

A successful registration returns HTTP `201` and the new student's public profile fields. The password hash is not returned. Reusing the same email returns HTTP `409`.

**Student accounts are not ready for public launch yet.** Registration, email verification, login, session management, password recovery, dashboard and account settings are implemented. The Neon staging schema has been created; hosted API deployment, Vercel-to-Render proxy testing, production transactional email delivery and final privacy/security review remain before public registration can be enabled.

## Local development workflow

Use two terminals:

**Terminal 1 — frontend, from the project root**

```bash
npm run dev
```

**Terminal 2 — API, from `server/`**

```bash
npm run dev
```

The API's `CLIENT_ORIGIN` must include the exact frontend origin being used in the browser. For the default local Vite address, use `http://localhost:5173`.

### Email verification and session environment variables

| Variable | Purpose | Local setting |
|---|---|---|
| `APP_BASE_URL` | Frontend origin used to build verification links | `http://localhost:5173` |
| `RESEND_API_KEY` | Server-only Resend API key | Leave blank for local link testing |
| `EMAIL_FROM` | Sender address on a Resend-verified domain | Leave blank for local link testing |
| `AUTH_COOKIE_SAME_SITE` | Session-cookie SameSite policy | `lax` |
| `AUTH_COOKIE_SECURE` | Require HTTPS for the session cookie | `false` locally; `true` in production |

In production, always use HTTPS and `AUTH_COOKIE_SECURE=true`. For this domain-free staging deployment, the browser should call the Vercel same-origin `/api` route, and Vercel should rewrite `/api/:path*` to the Render API. This keeps the session cookie first-party and allows `AUTH_COOKIE_SAME_SITE=lax`. Do not make browser requests directly to the separate `onrender.com` hostname. The Resend API key must remain in the backend environment, never in a frontend `VITE_*` variable. Set `TRUST_PROXY=1` for the Vercel-to-Render proxy setup.

### Password recovery

The local password-recovery flow uses the same Resend configuration as email verification. With `RESEND_API_KEY` and `EMAIL_FROM` blank in development, the forgot-password endpoint returns a development-only reset URL for an existing account. In production, email delivery must be configured; reset tokens are never returned to the browser. Reset links expire after one hour, are single-use, and a successful password change revokes all active sessions for that student.

## Deployment boundary

- **Frontend:** Vercel, using the root-level Vite project and `dist` output.
- **API:** a separate Node.js web service (Render) with `server/` as its root directory, `npm ci` as its build command and `npm start` as its start command. Its health-check path is `/api/health`.
- **Database:** a hosted PostgreSQL instance reachable by the API service.

Set production environment variables in the Render service dashboard: `DATABASE_URL`, `DATABASE_SSL=true`, `DATABASE_SSL_REJECT_UNAUTHORIZED=true`, `NODE_ENV=production`, `CLIENT_ORIGIN` and `APP_BASE_URL` set to the exact Vercel origin, `AUTH_COOKIE_SAME_SITE=Lax`, `AUTH_COOKIE_SECURE=true` and `TRUST_PROXY=1`. Add `RESEND_API_KEY` and `EMAIL_FROM` only after a verified sender is configured. Once Render provides the API hostname, replace the placeholder destination in `vercel.api-proxy.example.json` and save that configuration as the root `vercel.json`. Do not upload `.env`, expose database credentials in frontend variables, or point a hosted API at your local `localhost` database.

## Branding and curriculum notes

The approved Si Tutor identity is Rina's Option B Academic logo: a gold Psi with rays above a deep-green open book with gold accents, paired with the `situtor.` wordmark and gold full stop. Website header/footer placements use the transparent symbol and live typography; the browser/app icon retains its square ivory background.

The Chemistry lessons, quizzes and diagrams remain in the frontend source under `src/data/` and `src/pages/`. Student-account development does not migrate curriculum content into PostgreSQL. Curriculum maps, lesson-authoring standards, visual reviews and design notes are maintained in `docs/`.


## Student dashboard (Stage 4.6)

The authenticated student dashboard is available at `/dashboard`. It uses the Express `GET /api/auth/me` endpoint and the HTTP-only session cookie to confirm the signed-in student. Unauthenticated visitors are redirected to `/login`; if the API cannot be reached, the dashboard shows a retry state instead of treating a network error as a sign-out.

The dashboard currently shows the student's account details and the published SS1 Chemistry learning entry point. It deliberately does not fabricate lesson completion, quiz scores, or progress: learning activity synchronisation is a later phase. The frontend authentication state is shared through `src/context/AuthContext.tsx`.


## Account settings (Stage 4.7)

The authenticated account settings page is available at `/account` and is protected by the same student-session guard as `/dashboard`. Students can update their own display name through `PATCH /api/auth/profile`; the backend resolves the student identity from the HttpOnly session cookie and never accepts a student ID from the browser. Email addresses are displayed read-only in this phase because changing an email requires a separate verification workflow. Password management links to the existing secure password recovery flow. Profile updates return only the public student profile fields.

### Profile management API

- `PATCH /api/auth/profile` — updates the signed-in student's full name. The endpoint identifies the student from the hashed HttpOnly session cookie and does not accept a client-supplied student ID. The email address remains read-only until a separate email-change and re-verification workflow is implemented.


## Stage 4.8 — Security and responsive review

The Stage 4.8 source review adds the following safeguards and checks:

- State-changing API requests (`POST`, `PUT`, `PATCH`, `DELETE`) are checked against the configured `CLIENT_ORIGIN` allow-list. Requests marked `Sec-Fetch-Site: cross-site` are rejected when no `Origin` header is present. Command-line and server-to-server requests without browser origin metadata remain usable for development and operations.
- Production frontend and email-link origins must use HTTPS, `AUTH_COOKIE_SAME_SITE` must be explicitly configured, and production session cookies must be marked `Secure`.
- The login flow returns a student to the protected path they originally requested, while rejecting protocol-relative and backslash-based destinations.
- Dashboard and account-settings layouts include narrow-screen wrapping safeguards for long names, email addresses, status values and section links.
- The safe backend `server/.env.example` template is included. Put real local credentials only in the ignored `server/.env` file.

Backend syntax checks and automated tests are run with:

```bash
cd server
npm run check
npm test
```

The origin guard has automated tests for approved origins, rejected origins, cross-site Fetch Metadata, command-line requests and safe GET requests. Local responsive and account-flow checks have been carried out. Production readiness still requires successful hosted API/database connectivity, Vercel proxy and secure-cookie testing, actual transactional email delivery to student addresses, and a final privacy/security review.
