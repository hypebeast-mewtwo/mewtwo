import express from 'express';
import userdb from './userdb.json';
// const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(userdb.GOOGLE_CLIENT_ID);

const app = express();
const PORT = process.env.USERPORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use('/', (req, res, next) => {
  res.send('From user microservices');
});

const users: [] = [];
function addUser(array: [], item: String) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/google-auth', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: userdb.GOOGLE_CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  addUser(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

app.listen(PORT, () => {
  console.log(`User Service Listening on Port: ${PORT}`);
});
