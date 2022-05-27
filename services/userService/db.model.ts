const { Pool } = require('pg');

require('dotenv').config();

const databaseParams = {
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DBNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
};

const pool = new Pool(databaseParams);

module.exports = {
  query: (text: String, params: String, callback: String) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
