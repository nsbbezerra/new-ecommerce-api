import { ProductsDto } from '../../../dto/products';
import { updateProductService } from '../../../domain/products/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  product: ProductsDto;
}

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { product } = req.body as Props;

  try {
    const newProduct = await updateProductService({ product });

    return res
      .status(200)
      .json({ message: 'Produto atualizado com sucesso.', newProduct });
  } catch (error) {
    next(error);
  }
};
