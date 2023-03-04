import { saveCategoryRepository } from '../repositories';
import { CategoriesDto } from '../../../dto/categories';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  category: CategoriesDto;
}

interface Response {
  categoryId: string;
}

const saveCategoryService = async ({ category }: Props): Promise<Response> => {
  if (!category)
    throw new AppError('As informações da categoria são obrigatórias', 400);
  const { id } = await saveCategoryRepository({ category });

  return { categoryId: id };
};

export default saveCategoryService;
