import { Pool, QueryResult } from 'pg';
import 'dotenv/config';

type Callback<T> = (err: Error, result: QueryResult<T[]>) => T[];

export const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

pool.on('connect', () => {
  console.log('connected to database');
});

export const query = (
  text: string,
  params: string[],
  callback: Callback<any>
): void => {
  console.log('executed query', text);
  return pool.query(text, params, callback);
};
