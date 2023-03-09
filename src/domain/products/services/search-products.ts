import { ProductsWithRelationshipEntity } from '../../../entities/products';
import {
  getProductsByNameRepository,
  getBlockedProductsRepository,
  getPromoProductsRepository,
} from '../repositories';

interface Props {
  name: string;
  search: string;
}

const searchProductsService = async ({
  search,
  name,
}: Props): Promise<ProductsWithRelationshipEntity[] | undefined> => {
  if (search === 'name') {
    return await getProductsByNameRepository({ name });
  }
  if (search === 'promo') {
    return await getPromoProductsRepository();
  }
  if (search === 'block') {
    return await getBlockedProductsRepository();
  }
};

export default searchProductsService;
