import { Pool, QueryArrayResult, QueryResult } from 'pg';
import 'dotenv/config';

type Callback<T> = (err: Error, result: QueryResult<T[]>) => T[];

export const PG_URI = process.env.PG_URI;

export class Database {
  public static URI: string | undefined = process.env.PG_URI;
  private static dbInstance: Pool;

  static get instance(): Pool {
    if (!Database.dbInstance) {
      Database.dbInstance = new Pool({
        connectionString: Database.URI,
      }).on('connect', () => {
        console.log('connected to database');
      });
    }
    return Database.dbInstance;
  }

  static query(
    text: string,
    params?: string[],
    callback?: Callback<any>
  ): void | Promise<QueryResult<any>> {
    if (!params || !callback) {
      console.log('executed query', text);
      return Database.instance.query(text);
    }
    return Database.instance.query(text, params, callback);
  }
}
