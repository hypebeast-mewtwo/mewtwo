import express from 'express';
import inventoryController from '../controllers/controller';

const router = express.Router();

const { newItem } = inventoryController;

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send(req.originalUrl);
});

router.post('/newItem', newItem, (req, res) => {
  // console.log(req.body);
  res.status(200).json({ message: 'added new item' });
});

export default router;
