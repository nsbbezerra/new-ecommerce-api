import { getProductReviewsRepository } from '../repositories';
import { ReviewsEntity } from '../../../entities/reviews';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  productId: string;
}

const getProductReviewsService = async ({
  productId,
}: Props): Promise<ReviewsEntity[]> => {
  if (!productId.length)
    throw new AppError('O ID do produto é obrigatório.', 400);
  return await getProductReviewsRepository({ productId });
};

export default getProductReviewsService;
