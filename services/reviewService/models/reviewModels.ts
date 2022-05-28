import { Pool, QueryArrayResult, QueryResult } from 'pg';

type Callback<T> = (err: Error, result: QueryResult<T[]>) => T[];

export const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

pool.on('connect', () => {
  console.log('connected to database');
});

export default {
  query: (
    text: string,
    params?: string[],
    callback?: Callback<any>
  ): void | Promise<QueryArrayResult<any>> => {
    console.log('executing query', text);
    if (params && callback) {
      return pool.query(text, params, callback);
    }

    if (!callback) {
      return pool.query(text, params);
    }

    return pool.query(text);
  },
};
