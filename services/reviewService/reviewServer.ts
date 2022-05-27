import express from 'express';
import { query as db } from './models/reviewModels';
import 'dotenv/config';

const PORT = process.env.REVIEWS_PORT || 3003;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Reviews service listening on port ${PORT}...`);
});
