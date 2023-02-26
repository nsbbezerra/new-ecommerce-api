import { CategoriesEntity } from '../../../entities/categories';
import { prisma } from '../../../database';

const getAllCategoriesRepository = async (): Promise<CategoriesEntity[]> => {
  return await prisma.categories.findMany({
    orderBy: { name: 'asc' },
  });
};

export default getAllCategoriesRepository;
