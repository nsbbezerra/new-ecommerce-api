import { prisma } from '../../../database';

interface Props {
  productId: string;
}

const deleteProductThumbnailRepository = async ({
  productId,
}: Props): Promise<void> => {
  await prisma.products.update({
    where: { id: productId },
    data: {
      thumbnail: null,
      thumbnail_id: null,
    },
  });
};

export default deleteProductThumbnailRepository;
