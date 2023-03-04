import { ProductsWithRelationshipEntity } from '../../../entities/products';
import { getAllProductsRepository } from '../repositories';

const getAllProductsService = async (): Promise<
  ProductsWithRelationshipEntity[]
> => {
  return await getAllProductsRepository();
};

export default getAllProductsService;
