import userdb from './userdb.json';

const { Pool } = require('pg');

const databaseParams = {
  user: userdb.RDS_USERNAME,
  host: userdb.RDS_HOSTNAME,
  database: userdb.RDS_DBNAME,
  password: userdb.RDS_PASSWORD,
  port: userdb.RDS_PORT,
};

const pool = new Pool(databaseParams);
pool.on('connect', () => {
  console.log('connected to userdb');
});

module.exports = {
  query: (text: String, params: String, callback: String) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
