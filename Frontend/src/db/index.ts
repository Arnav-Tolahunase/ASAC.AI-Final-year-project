
import SQLiteDatabase from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from '@/db/schema';

const sqlite = new SQLiteDatabase(process.env.SQLITE_DATABASE_PATH || 'auth.sqlite');

export const db = drizzle(sqlite, { schema });

export type Database = typeof db;
