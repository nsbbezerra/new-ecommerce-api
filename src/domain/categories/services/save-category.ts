import { saveCategoryRepository } from '../repositories';
import { CategoriesDto } from '../../../dto/categories';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  category: CategoriesDto;
}

const saveCategoryService = async ({ category }: Props): Promise<void> => {
  if (!category)
    throw new AppError('As informações da categoria são obrigatórias', 400);
  await saveCategoryRepository({ category });
};

export default saveCategoryService;
