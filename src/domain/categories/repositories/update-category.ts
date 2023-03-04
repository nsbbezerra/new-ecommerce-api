import { CategoriesEntity } from '../../../entities/categories';
import { prisma } from '../../../database';
import { CategoriesDto } from '../../../dto/categories';

interface Props {
  category: CategoriesDto;
}

const updateCategoryRepository = async ({ category }: Props): Promise<void> => {
  await prisma.categories.update({
    where: { id: category.id },
    data: {
      ...category,
    },
  });
};

export default updateCategoryRepository;
