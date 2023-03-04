import { updateCategoryRepository } from '../repositories';
import { Categories } from '@prisma/client';
import AppError from '../../../shared/helpers/app-error';
import { CategoriesDto } from '../../../dto/categories';

interface Props {
  category: CategoriesDto;
}

const updateCategoryService = async ({ category }: Props): Promise<void> => {
  if (!category)
    throw new AppError('As informações da categoria são obrigatórias', 400);
  await updateCategoryRepository({ category });
};

export default updateCategoryService;
