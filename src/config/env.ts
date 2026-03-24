import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const env = {
  serverPort: process.env.SERVE,
  pgUser: process.env.DB_USER || 'postgres',
  pgPassword: process.env.DB_PASSWORD || '',
  pgHost: process.env.DB_HOST || '5432',
  pgPort: Number(process.env.DB_POR) || 5432,
  pgDatabase: process.env.DB_NAME || "express_server"
}
