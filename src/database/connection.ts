import { Pool } from 'pg';
import { env } from '../config/env';

export const pool = new Pool({
  host: env.pgHost,
  port: env.pgPort,
  user: env.pgUser,
  password: env.pgPassword,
  database: env.pgDatabase
});