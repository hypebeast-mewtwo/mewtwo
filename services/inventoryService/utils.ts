import { ErrorRequestHandler } from 'express';

const errorHandling: ErrorRequestHandler = (err, _req, res, _next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred ' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj);
  res.status(errorObj.status).json(errorObj.message);
};

export { errorHandling };
