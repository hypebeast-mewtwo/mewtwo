import dbINV from './../model/inventory';
import { RequestHandler } from 'express';

interface invControllerT {
  newItem: RequestHandler;
  getAllItems: RequestHandler;
  getOneItem: RequestHandler;
}

const inventoryController: invControllerT = <invControllerT>{};

inventoryController.newItem = async (req, _res, next) => {
  const { name, quantity, price, description, image } = req.body;

  try {
    await dbINV.create({ name, quantity, price, description, image });

    return next();
  } catch (err) {
    return next({
      log: `Error in Inventory microservice with inventoryController.newItem Error: ${err}`,
      message: {
        err: 'Error with Controller in Inventory MS. Check server logs for details',
      },
    });
  }
};

inventoryController.getAllItems = async (req, res, next) => {
  try {
    const items = await dbINV.find();
    res.locals.items = items;

    return next();
  } catch (err) {
    return next({
      log: `Error in Inventory microservice with inventoryController.getAllItems Error: ${err}`,
      message: {
        err: 'Error with Controller in Inventory MS. Check server logs for details',
      },
    });
  }
};

inventoryController.getOneItem = async (req, res, next) => {
  const { id } = req.params;

  try {
    const item = await dbINV.findOne({ id });
    res.locals.item = item;

    return next();
  } catch (err) {
    return next({
      log: `Error in Inventory microservice with inventoryController.getOneItems Error: ${err}`,
      message: {
        err: 'Error with Controller in Inventory MS. Check server logs for details',
      },
    });
  }
};

export default inventoryController;
