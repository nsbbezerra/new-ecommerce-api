import { prisma } from '../../../database';

interface Props {
  thumbnail: string;
  thumbnailId: string;
  productId: string;
}

const setProductThumbnailRepository = async ({
  productId,
  thumbnail,
  thumbnailId,
}: Props): Promise<void> => {
  await prisma.products.update({
    where: { id: productId },
    data: {
      thumbnail,
      thumbnail_id: thumbnailId,
    },
  });
};

export default setProductThumbnailRepository;
