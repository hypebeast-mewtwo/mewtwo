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

// export class Database {
//   public static URI: string | undefined = PG_URI;
//   private static dbInstance: Pool;

//   static get instance(): Pool {
//     if (!Database.URI) {
//       console.log(Database.URI)
//       throw new Error('Error in database connection: No URI provided');
//     }

//     if (!Database.dbInstance) {
//       Database.dbInstance = new Pool({
//         connectionString: Database.URI,
//       }).on('connect', () => {
//         console.log('connected to database');
//       });
//     }
//     return Database.dbInstance;
//   }

//   static query(
//     text: string,
//     params?: string[],
//     callback?: Callback<any>
//   ): void | Promise<QueryResult<any>> {
//     const db = Database.instance
//     console.log('executing query', text);
//     if (!params || !callback) {
//       return db.query(text);
//     }
//     return db.query(text, params);
//   }
// }
