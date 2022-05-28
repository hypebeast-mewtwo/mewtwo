import express from 'express';
const userdb = require('./userdb.json');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(userdb.GOOGLE_CLIENT_ID);

const app = express();
const PORT = process.env.USERPORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', (req, res, next) => {
  res.send('From user microservices');
});

app.listen(PORT, () => {
  console.log(`User Service Listening on Port: ${PORT}`);
});
