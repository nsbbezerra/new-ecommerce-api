import { ProductsDto } from '../../../dto/products';
import { saveProductService } from '../../../domain/products/services';
import { NextFunction, Request, Response } from 'express';

interface Props {
  product: ProductsDto;
}

export const saveProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { product } = req.body as Props;

  try {
    await saveProductService({ product });

    return res.status(200).json({ message: 'Produto cadastrado com suceso.' });
  } catch (error) {
    next(error);
  }
};
