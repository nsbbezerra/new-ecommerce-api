import { getAllCategoriesRepository } from '../repositories';
import { CategoriesEntity } from '../../../entities/categories';

const getAllCategoriesService = async (): Promise<CategoriesEntity[]> => {
  return await getAllCategoriesRepository();
};

export default getAllCategoriesService;
