import express, { Request, Response, NextFunction } from 'express';
import inventoryRouter from './routes/routes';
import { errorHandling } from './utils';

const app = express();
const PORT = process.env.INVENTORYPORT || 3002;

app.use(express.json());

app.use('/inventory', inventoryRouter);

app.use('/', (_req, res) => {
  res.send('testing route from inventory service');
});

app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Inventory MS Listening on Port ${PORT}`);
});
