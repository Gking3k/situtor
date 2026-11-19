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

The local frontend calls the same-origin `/api` path while running under Vite; `vite.config.ts` proxies those requests to the local Express API at `http://127.0.0.1:4000`. To override the API base, set `VITE_API_BASE_URL` in a private `.env.local`. Only public configuration belongs in `VITE_` variables; never put a database password, service-role key or other secret in a Vite environment variable.

**This is not ready for public registration yet.** Local registration, email verification, login, password recovery, dashboard and account settings are implemented and have been tested locally. Hosted database/API setup, provider email configuration, deployed cross-device verification, production privacy review and final launch checks remain outstanding. A custom domain is not required for a staging deployment; Vercel and Render provide their own service subdomains.

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

**Student accounts are still in staging preparation and are not ready for public launch.** Registration, email verification, login, session management, password recovery, dashboard and account settings have been implemented and tested locally. Hosted PostgreSQL, hosted API, deployed cookie/proxy testing, transactional email delivery to real student addresses and the final privacy/security review remain outstanding.

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

In production, always use HTTPS and `AUTH_COOKIE_SECURE=true`. For the no-custom-domain staging setup, keep browser API calls on the Vercel origin (`/api`) and use a Vercel external rewrite as a reverse proxy to the Render API. This keeps the session cookie first-party and allows `AUTH_COOKIE_SAME_SITE=lax`; do not have the browser call the separate `onrender.com` hostname directly. The Resend API key must remain in the backend environment, never in a frontend `VITE_*` variable. Set `TRUST_PROXY` to the correct proxy-hop configuration for the selected API host.

### Password recovery

The local password-recovery flow uses the same Resend configuration as email verification. With `RESEND_API_KEY` and `EMAIL_FROM` blank in development, the forgot-password endpoint returns a development-only reset URL for an existing account. In production, email delivery must be configured; reset tokens are never returned to the browser. Reset links expire after one hour, are single-use, and a successful password change revokes all active sessions for that student.

## Deployment boundary

- **Frontend:** Vercel, using the root-level Vite project and `dist` output.
- **API:** a separate Node.js web service (for example, a Render web service) with `server/` as its root directory, `npm install` as its build/install command and `npm start` as its start command.
- **Database:** a hosted PostgreSQL instance reachable by the API service.

For the no-custom-domain staging approach and the required proxy/cookie setup, follow **Stage 4.9 — Domain-free staging deployment** below. Do not upload `.env`, expose database credentials in frontend variables, or point a public API at your local `localhost` database.

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
- The safe `server/.env.example` template is included. Put real local credentials only in the ignored `server/.env` file.

Backend syntax checks and automated tests are run with:

```bash
cd server
npm run check
npm test
```

The origin guard has automated tests for approved origins, rejected origins, cross-site Fetch Metadata, command-line requests and safe GET requests. Browser-level testing at narrow viewport widths and the full frontend production build must still be confirmed in the developer's local environment. Staging deployment additionally requires a hosted PostgreSQL database, HTTPS deployment, and a correctly configured Vercel-to-API proxy. Public production registration requires transactional email delivery to arbitrary student addresses and a final privacy/security review.


## Stage 4.9 — Domain-free staging deployment

A paid custom domain is **not required** for the first hosted staging deployment. Vercel assigns the frontend a `*.vercel.app` URL, and Render assigns the API a `*.onrender.com` URL. These provider subdomains are suitable for testing and review, but do not by themselves make the platform production-ready. See the provider docs: [Vercel deployment domains](https://vercel.com/docs/domains/working-with-domains) and [Render web services](https://render.com/docs/web-services).

### Recommended staging architecture

- **Frontend:** Vercel project using the repository root, `npm run build`, and `dist`.
- **API:** Render Web Service using `server/` as its root directory, `npm ci` as the build command, and `npm start` as the start command.
- **Database:** Neon PostgreSQL Free for staging only. The free plan currently includes 1 GB per project and 100 compute-hours per project per month; compute scales to zero after five minutes of inactivity. Check current quotas before use.
- **Browser/API routing:** Vercel proxies `/api/*` to the Render service. The browser continues to call `/api` on its Vercel origin, avoiding a browser-facing cross-site cookie between `vercel.app` and `onrender.com`. Vercel documents external rewrites as a reverse-proxy pattern.
- **Email:** Resend test sender may be used only for controlled tests to the account owner. A verified sending domain is required before transactional emails can be sent to general student recipients.

### Important free-tier limits

- Render Free web services spin down after 15 minutes without inbound traffic and can take about a minute to wake up. Render explicitly says Free instances are not for production applications. Do not put a public student service on this free API tier without accepting that limitation and moving to a suitable paid tier later.
- Do **not** use Render Free Postgres for student records: free Render Postgres databases expire 30 days after creation.
- Neon Free is suitable for a prototype/staging database, not a substitute for a production backup and recovery plan. Current quotas include limited compute, 1 GB storage, and a six-hour instant-restore history.
- Vercel Hobby is a free plan for personal projects and small-scale apps; check plan terms and current limits before using it for a commercial service.
- Until a verified email-sending domain is available, keep public registration disabled. Resend's test sender is not a general-purpose sender for arbitrary student addresses.

### Files added for this deployment

- `server/.env.example` — safe local API environment template.
- `.env.example` — frontend API-base template; only public `VITE_*` configuration belongs here.
- `render.yaml` — Render API service blueprint. Supply hosted database and frontend URL values in the Render dashboard; never commit secrets.
- `server/sql/001_student_accounts.sql` — creates the student-account schema in a fresh hosted PostgreSQL database.
- `vercel.api-proxy.example.json` — copy this into `vercel.json` after replacing `YOUR-RENDER-SERVICE` with the exact Render hostname. Keep the `/api/:path*` rule before the SPA fallback.

### Local development uses the same `/api` route

The frontend now defaults to the same-origin `/api` path. Vite proxies `/api` to `http://127.0.0.1:4000` locally. After deployment, Vercel proxies `/api` to the Render API. This keeps the cookie model consistent between local and hosted staging. If a private `.env.local` sets `VITE_API_BASE_URL`, set it to `/api` or remove the override.

### Neon database setup

1. Create a Neon project and select a region reasonably close to the API host.
2. Copy the pooled connection string from the Neon dashboard. Keep it private.
3. Open the Neon SQL Editor and run `server/sql/001_student_accounts.sql` against the new database.
4. Save the connection string for the Render `DATABASE_URL` environment variable.
5. Do not migrate demonstration accounts automatically. Decide separately whether any real test student records should be exported from the local database.

### Render API setup

Use the `render.yaml` Blueprint or create a Web Service manually with:

- Root directory: `server`
- Build command: `npm ci`
- Start command: `npm start`
- Health check path: `/api/health`

Set these environment values in Render: `NODE_ENV=production`, `DATABASE_URL` (Neon pooled connection string), `DATABASE_SSL=true`, `DATABASE_SSL_REJECT_UNAUTHORIZED=true`, `CLIENT_ORIGIN` (the exact Vercel origin, e.g. `https://your-project.vercel.app`), `APP_BASE_URL` (same exact Vercel origin), `AUTH_COOKIE_SAME_SITE=Lax`, `AUTH_COOKIE_SECURE=true`, and `TRUST_PROXY=1`. Add `RESEND_API_KEY` and `EMAIL_FROM` only when ready to test transactional email. Never send secrets in chat or commit them.

After Render creates the service, copy its exact `https://<service>.onrender.com` hostname. Replace the placeholder in `vercel.api-proxy.example.json` and save that content as the root `vercel.json`. Deploy the Vercel project again.

### Vercel frontend setup

Use the repository root as the Vercel project root, build command `npm run build`, and output directory `dist`. Set `VITE_API_BASE_URL=/api` in the Vercel environment variables, then redeploy after changing the variable. Once the proxy rewrite is installed, test `/api/health`, `/api/health/db`, registration, email verification, login, refresh persistence, logout, password reset, and profile updates from the deployed Vercel URL.

**Do not enable public registration yet.** First verify the proxy/cookie flow end to end and arrange a sender domain capable of delivering verification and reset messages to arbitrary students.
