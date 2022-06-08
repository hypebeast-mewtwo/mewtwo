import express from 'express';
import inventoryController from '../controllers/controller';

const router = express.Router();

const { newItem, getAllItems, getOneItem, updateItem } = inventoryController;

router.get('/items', getAllItems, (req, res) => {
  return res.status(200).json({ items: res.locals.items });
});

router.get('/:id', getOneItem, (req, res) => {
  return res.status(200).json({ item: res.locals.item });
});

router.post('/newItem', newItem, (req, res) => {
  return res
    .status(200)
    .json({ message: 'added new item', newItem: res.locals.newItem });
});

router.patch('/update/:id', updateItem, (req, res) => {
  return res.status(200).json({ updateItem: res.locals.updateItem });
});

export default router;
