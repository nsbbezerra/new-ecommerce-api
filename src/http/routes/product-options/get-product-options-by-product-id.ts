import { getProductOptionsByProductIdService } from '../../../domain/product-options/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  productId: string;
}

export const getProductOptionsByProductIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params as unknown as Props;

  try {
    const productOptions = await getProductOptionsByProductIdService({
      productId,
    });

    return res.status(200).json(productOptions);
  } catch (error) {
    next(error);
  }
};
