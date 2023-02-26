import { ProductsEntity } from '../../../entities/products';
import { getAllProductsRepository } from '../repositories';

const getAllProductsService = async (): Promise<ProductsEntity[]> => {
  return await getAllProductsRepository();
};

export default getAllProductsService;
