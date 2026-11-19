import pg from 'pg';
import { env } from '../config/env.js';

const { Pool } = pg;

export const pool = new Pool(env.database);

pool.on('error', (error) => {
  // Do not print credentials or connection strings to logs.
  console.error('[database] Unexpected idle-client error:', error.message);
});
