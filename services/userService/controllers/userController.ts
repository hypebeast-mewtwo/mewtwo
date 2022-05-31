import { RequestHandler } from 'express';

const db = require('../db.model');

interface controllerUser {
  verifyUser: RequestHandler;
  addUser: RequestHandler;
}
const userController: controllerUser = <controllerUser>{};

userController.verifyUser = async (req, res, next) => {
  const { name, email, picture, userId } = req.body;
  const sql = `SELECT name FROM user WHERE name = '${name}';`;

  db.query(sql)
    .then((_data: any) => {
      console.log('user already exists in userDB');
    })
    .catch((err: any) => {
      console.log('send to add user to DB:', err);
      next(userController.addUser);
    });
};

userController.addUser = async (req, res, next) => {
  const { name, email, picture, userId } = req.body;
  const addSQL = `INSERT INTO user (name, email, userId) VALUES('${name}', '${email}', '${userId}');`;

  db.query(addSQL)
    .then((data: any) => {
      console.log('user added to userDB');
    })
    .catch((err: any) => {
      console.log('error in add user:', err);
    });
};

export default userController;
