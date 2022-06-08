import { Schema, model, connect } from 'mongoose';

const MONGO_URI =
  process.env.MONGOFB_URI || 'mongodb://localhost/mewtwo-inventory';

(async function runDB() {
  await connect(MONGO_URI);
})()
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

interface InventoryT {
  name: string;
  quantity: number;
  price: Number;
  description: string;
  image: string;
  redirect: string;
}

const inventorySchema = new Schema<InventoryT>({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  description: { type: String, default: '' },
  image: { type: String, required: true },
  redirect: { type: String, required: true },
});

const Inventory = model<InventoryT>('Inventory', inventorySchema);

export default Inventory;
