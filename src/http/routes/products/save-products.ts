import { ProductsDto } from '../../../dto/products';
import { saveProductService } from '../../../domain/products/services';
import { NextFunction, Request, Response } from 'express';
import { ProductOptionsDto } from '../../../dto/product-options';

interface Props {
  product: ProductsDto;
  productOptions: ProductOptionsDto[];
}

export const saveProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { product, productOptions } = req.body as Props;

  try {
    const { id: productId } = await saveProductService({
      product,
      productOptions,
    });

    return res
      .status(200)
      .json({ message: 'Produto cadastrado com suceso.', productId });
  } catch (error) {
    next(error);
  }
};
