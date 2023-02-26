import { NextFunction, Request, Response } from 'express';
import { getAllProductsService } from '../../../domain/products/services';

export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getAllProductsService();

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
