import { getProductReviewsService } from '../../../domain/reviews/services';
import { NextFunction, Request, Response } from 'express';

interface Props {
  productId: string;
}

export const getProductReviewsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params as unknown as Props;

  try {
    const reviews = await getProductReviewsService({ productId });

    return res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};
