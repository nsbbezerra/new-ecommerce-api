import { NextFunction, Request, Response } from 'express';
import saveFakerProductsRepository from '../../../domain/products/repositories/save-faker-products';

export const saveFakerProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await saveFakerProductsRepository();

    return res.status(200).json({ message: 'OK' });
  } catch (error) {
    next(error);
  }
};
