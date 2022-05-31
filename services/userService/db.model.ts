const { Pool } = require('pg');

const databaseParams = {
  username: process.env.RDS_USERNAME,
  hostname: process.env.RDS_HOSTNAME,
  dbname: process.env.RDS_DBNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
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
