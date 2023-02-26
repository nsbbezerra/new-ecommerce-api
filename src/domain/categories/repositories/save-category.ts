import { CategoriesDto } from '../../../dto/categories';
import { prisma } from '../../../database';

interface Props {
  category: CategoriesDto;
}

const saveCategoryRepository = async ({ category }: Props): Promise<void> => {
  await prisma.categories.create({
    data: { ...category },
  });
};

export default saveCategoryRepository;
