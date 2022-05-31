import { InterfaceDeclaration } from 'typescript';
import express, { Request, Response, NextFunction } from 'express';

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const { Pool } = require('pg');
const configDB = process.env.USER_RDS_HOSTNAME;
let session = require('express-session');

const pool = new Pool(configDB);

const authentication = {
  verified: async (req: any, res: Express.Response, next: any) => {
    const { token } = req.body;
    const ticket = await client.verifyToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    if (!token) {
      return next({
        log: 'error verifying google id',
        message: {
          // err: `error received verifying google id ${err}`,
        },
      });
    }
    const { name, email, picture } = ticket.getPayload();
    // const userInfo = [name, email, picture];

    pool.query();
  },
};

export default authentication;
