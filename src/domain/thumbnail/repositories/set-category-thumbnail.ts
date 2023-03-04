import { prisma } from '../../../database';

interface Props {
  thumbnail: string;
  thumbnailId: string;
  categoryId: string;
}

const setCategoryThumbnailRepository = async ({
  categoryId,
  thumbnail,
  thumbnailId,
}: Props): Promise<void> => {
  await prisma.categories.update({
    where: { id: categoryId },
    data: {
      thumbnail,
      thumbnail_id: thumbnailId,
    },
  });
};

export default setCategoryThumbnailRepository;
