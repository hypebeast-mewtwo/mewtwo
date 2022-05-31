import express, { Request, Response, NextFunction } from 'express';
import authentication from './authentication';
import userController from './controllers/userController';

const app = express();
require('dotenv').config();

const PORT = process.env.USERPORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  res.send('From user microservices');
});

app.post(
  '/api/google-auth',
  authentication.verified,
  userController.verifyUser,
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
