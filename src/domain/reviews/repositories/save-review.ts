import { ReviewsDto } from '../../../dto/reviews';
import { prisma } from '../../../database';

interface Props {
  review: ReviewsDto;
}

const saveReviewRepository = async ({ review }: Props): Promise<void> => {
  await prisma.reviews.create({
    data: { ...review },
  });
};

export default saveReviewRepository;
