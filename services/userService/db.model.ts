import { Pool, QueryResult } from 'pg';

require('dotenv').config();

type Callback<T> = (err: Error, result: QueryResult<T[]>) => T[];

const port: number = 5432;

const databaseParams = {
  username: process.env.USER_RDS_USERNAME,
  hostname: process.env.USER_RDS_HOSTNAME,
  dbname: process.env.USER_RDS_DBNAME,
  password: process.env.USER_RDS_PASSWORD,
  port: port,
};

const pool = new Pool(databaseParams);

pool.on('connect', () => {
  console.log('connected to userdb');
});

module.exports = {
  databaseParams,
  query: (text: string, params: any, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
