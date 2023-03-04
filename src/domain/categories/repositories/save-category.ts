import { CategoriesDto } from '../../../dto/categories';
import { CategoriesEntity } from '../../../entities/categories';
import { prisma } from '../../../database';

interface Props {
  category: CategoriesDto;
}

const saveCategoryRepository = async ({
  category,
}: Props): Promise<CategoriesEntity> => {
  return await prisma.categories.create({
    data: { ...category },
  });
};

export default saveCategoryRepository;
