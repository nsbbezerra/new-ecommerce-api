import { prisma } from '../../../database';

interface Props {
  categoryId: string;
}

const deleteCategoryThumbnailRepository = async ({
  categoryId,
}: Props): Promise<void> => {
  await prisma.categories.update({
    where: { id: categoryId },
    data: {
      thumbnail: null,
      thumbnail_id: null,
    },
  });
};

export default deleteCategoryThumbnailRepository;
