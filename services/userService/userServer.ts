import express from 'express';

const app = express();
const PORT = process.env.USERPORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  res.send('From user microservices');
});

app.listen(PORT, () => {
  console.log(`User Service Listening on Port: ${PORT}`);
});
