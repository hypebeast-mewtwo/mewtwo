import express, { Request, Response, NextFunction } from 'express';
import proxy from 'express-http-proxy';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', proxy('http://localhost:3001'));

app.use(
  '/inventory',
  proxy((req) => {
    console.log('proxy to Inventory MS ');
    return 'http://localhost:3002';
  })
);

// app.use('/reviews', (req: Request, res: Response, next: NextFunction) => {
//   res.send('reviews');
// });

// app.use('/payment', (req: Request, res: Response, next: NextFunction) => {
//   res.send('payment');
// });

app.listen(PORT, () => {
  console.log(`Gateway listening on port ${PORT}`);
});
