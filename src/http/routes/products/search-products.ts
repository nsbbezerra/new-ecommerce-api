import { searchProductsService } from '../../../domain/products/services';
import { NextFunction, Request, Response } from 'express';

interface BodyProps {
  name: string;
}

interface ParamsProps {
  search: string;
}

export const searchProductsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body as BodyProps;
  const { search } = req.params as unknown as ParamsProps;

  try {
    const products = await searchProductsService({
      name,
      search,
    });

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};
