# Student accounts — Phase 4.3: Express API foundation

## Scope completed

- Added a standalone Node.js/Express API under `server/`, separate from the existing React/Vite frontend.
- Added environment-based PostgreSQL configuration, supporting either individual `DB_*` values or a hosted `DATABASE_URL`.
- Added a bounded `pg` connection pool with connection timeout and idle-client error handling.
- Added Helmet security headers, a credential-aware CORS allow-list, a 25 KB JSON body limit and a general API rate limiter.
- Added `/api/health` and `/api/health/db` endpoints. The database endpoint verifies the four student-account tables created in Phase 4.2.
- Added generic error handling and graceful process shutdown.
- Documented local Windows/PowerShell setup and the later separate API deployment path.

## Not included yet

No registration, login, session creation, email verification, password reset, student dashboard, email delivery or payment code has been added. Those are subsequent implementation phases.

## Local verification checklist

1. Copy `server/.env.example` to `server/.env` and enter the actual local PostgreSQL connection details privately.
2. Run `npm install` from `server/`.
3. Run `npm run check`.
4. Run `npm run dev`.
5. Confirm `/api/health` returns `status: ok`.
6. Confirm `/api/health/db` returns `database: connected` and `studentSchema: ready`.

The API has not been connected to the user's local PostgreSQL instance from this development environment; credentials are intentionally not requested or embedded in this project.
