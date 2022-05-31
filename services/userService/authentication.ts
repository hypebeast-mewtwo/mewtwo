import { InterfaceDeclaration } from 'typescript';
import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import { configDB } from './db.model';

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const { Pool } = require('pg');
// let session = require('express-session');

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
