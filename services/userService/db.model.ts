const { Pool } = require('pg');

const databaseParams = {
  username: process.env.USER_RDS_USERNAME,
  hostname: process.env.USER_RDS_HOSTNAME,
  dbname: process.env.USER_RDS_DBNAME,
  password: process.env.USER_RDS_PASSWORD,
  port: process.env.USER_RDS_PORT,
};

const pool = new Pool(databaseParams);
pool.on('connect', () => {
  console.log('connected to userdb');
});

module.exports = {
  databaseParams,
  query: (text: String, params: String, callback: String) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
