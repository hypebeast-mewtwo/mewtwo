import express from 'express';
import inventoryController from '../controllers/controller';

const router = express.Router();

const { newItem, getAllItems, getOneItem } = inventoryController;

router.get('/items', getAllItems, (req, res) => {
  return res.status(200).json({ items: res.locals.items });
});

router.get('/:id', getOneItem, (req, res) => {
  return res.status(200).json({ item: res.locals.item });
});

router.post('/newItem', newItem, (req, res, next) => {
  return res.status(200).json({ message: 'added new item' });
});

export default router;
