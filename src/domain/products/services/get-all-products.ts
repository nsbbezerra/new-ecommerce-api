import { ProductsWithRelationshipEntity } from '../../../entities/products';
import { getAllProductsRepository } from '../repositories';

interface Props {
  page: number;
  limit: number;
}

interface Response {
  products: ProductsWithRelationshipEntity[];
  count: number;
}

const getAllProductsService = async ({
  limit,
  page,
}: Props): Promise<Response> => {
  const { count, products } = await getAllProductsRepository({ limit, page });

  return { count, products };
};

export default getAllProductsService;
