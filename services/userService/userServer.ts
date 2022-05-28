import express from 'express';
const authentication = require('./authentication');
const sessionClear = require('./sessionClear.ts');

const app = express();
const PORT = process.env.USERPORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sessionClear();

app.use('/', (req, res, next) => {
  res.send('From user microservices');
});

app.post(
  '/api/google-auth',
  authentication.verified,
  authentication.getUserInfo,
  (req, res) => {
    const { userId } = res.locals;
    res.cookie('userId', userId, {
      expires: new Date(Date.now() + 1000000),
    });
    return res.status(201).send('cookie sent');
  }
);

app.listen(PORT, () => {
  console.log(`User Service Listening on Port: ${PORT}`);
});
