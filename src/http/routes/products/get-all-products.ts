import { NextFunction, Request, Response } from 'express';
import { getAllProductsService } from '../../../domain/products/services';

interface Props {
  page: number;
  limit: number;
}

export const getAllProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit } = req.params as unknown as Props;

  try {
    const { count, products } = await getAllProductsService({ page, limit });

    return res.status(200).json({ products, count });
  } catch (error) {
    next(error);
  }
};
