import { saveReviewService } from '../../../domain/reviews/services';
import { NextFunction, Request, Response } from 'express';
import { ReviewsDto } from '../../../dto/reviews';

interface Props {
  review: ReviewsDto;
}

export const saveReviewController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { review } = req.body as Props;

  try {
    await saveReviewService({ review });

    return res
      .status(200)
      .json({ message: 'Comentário inserido com sucesso.' });
  } catch (error) {
    next(error);
  }
};
