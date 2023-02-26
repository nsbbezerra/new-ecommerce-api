import { ReviewsEntity } from '../../../entities/reviews';
import { prisma } from '../../../database';

interface Props {
  productId: string;
}

const getProductReviewsRepository = async ({
  productId,
}: Props): Promise<ReviewsEntity[]> => {
  return await prisma.reviews.findMany({
    where: { product_id: productId },
    select: {
      client: {
        select: {
          name: true,
        },
      },
      headline: true,
      id: true,
      content: true,
      rating: true,
      created_at: true,
    },
  });
};

export default getProductReviewsRepository;
