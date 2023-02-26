import { ReviewsDto } from '../../../dto/reviews';
import AppError from '../../../shared/helpers/app-error';
import { saveReviewRepository } from '../repositories';

interface Props {
  review: ReviewsDto;
}

const saveReviewService = async ({ review }: Props): Promise<void> => {
  if (!review)
    throw new AppError('As informações do comentário são obrigatórias', 400);
  await saveReviewRepository({ review });
};

export default saveReviewService;
