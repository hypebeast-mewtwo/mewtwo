import { Pool, QueryResult } from 'pg';
import 'dotenv/config';

type Callback<T> = (err: Error, result: QueryResult<T[]>) => T[];

const port: number = 5432;

const databaseParams = {
  username: process.env.USER_RDS_USERNAME,
  hostname: process.env.USER_RDS_HOSTNAME,
  dbname: process.env.USER_RDS_DBNAME,
  password: process.env.USER_RDS_PASSWORD,
  port: port,
};

export const configDB = {
  connectionString:
    databaseParams.dbname +
    '://' +
    databaseParams.username +
    ':' +
    databaseParams.password +
    '@' +
    databaseParams.hostname,
};
const pool = new Pool(configDB);

pool.on('connect', () => {
  console.log('connected to userdb');
});

module.exports = {
  configDB,
  databaseParams,
  query: (text: string, params: any, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
