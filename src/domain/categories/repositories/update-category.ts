import { CategoriesEntity } from '../../../entities/categories';
import { prisma } from '../../../database';
import { CategoriesDto } from '../../../dto/categories';

interface Props {
  category: CategoriesDto;
}

const updateCategoryRepository = async ({
  category,
}: Props): Promise<CategoriesEntity> => {
  return await prisma.categories.update({
    where: { id: category.id },
    data: {
      name: category.name,
      slug: category.slug,
    },
  });
};

export default updateCategoryRepository;
