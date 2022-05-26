import express from 'express';

const app = express();
const PORT = process.env.INVENTORYPORT || 3002;

app.use('/', (req, res, next) => {
  res.send('testing route from inventory service');
});

app.listen(PORT, () => {
  console.log(`Inventory MS Listening on Port ${PORT}`);
});
