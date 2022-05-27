import express, { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', proxy('http://localhost:3001'));

// app.use('/inventory', (req: Request, res: Response, next: NextFunction) => {
//   res.send('inventory');
// });

app.use(
  '/reviews',
  proxy(() => {
    console.log(`Proxying to reviews microservice`)
    return 'http://localhost:3003';
  })
);

// app.use('/payment', (req: Request, res: Response, next: NextFunction) => {
//   res.send('payment');
// });

app.listen(PORT, () => {
  console.log(`Gateway listening on port ${PORT}`);
});
