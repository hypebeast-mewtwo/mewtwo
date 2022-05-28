import dbINV from './../model/inventory';
import { Request, Response, NextFunction } from 'express';

interface invControllerT {
  newItem?: any;
  getAllItems?: any;
}

const inventoryController: invControllerT = {};

inventoryController.newItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, quantity, price, description, image } = req.body;
  // console.log(req.body);
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

inventoryController.getAllItems = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export default inventoryController;
