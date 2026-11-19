import { Router } from 'express';
import { pool } from '../db/pool.js';

const router = Router();

const requiredStudentTables = [
  'students',
  'student_sessions',
  'student_email_verification_tokens',
  'student_password_reset_tokens',
];

router.get('/', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    service: 'si-tutor-api',
  });
});

router.get('/db', async (_request, response) => {
  try {
    const result = await pool.query(
      `
        SELECT COUNT(*)::int AS table_count
        FROM information_schema.tables
        WHERE table_schema = 'public'
          AND table_name = ANY($1::text[])
      `,
      [requiredStudentTables],
    );

    const schemaReady = result.rows[0]?.table_count === requiredStudentTables.length;

    if (!schemaReady) {
      return response.status(503).json({
        status: 'degraded',
        database: 'connected',
        studentSchema: 'incomplete',
      });
    }

    return response.status(200).json({
      status: 'ok',
      database: 'connected',
      studentSchema: 'ready',
    });
  } catch {
    return response.status(503).json({
      status: 'degraded',
      database: 'unavailable',
      studentSchema: 'unchecked',
    });
  }
});

export default router;
