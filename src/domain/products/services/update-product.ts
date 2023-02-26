import { updateProductRepository } from '../repositories';
import { ProductsDto } from '../../../dto/products';
import { ProductsEntity } from '../../../entities/products';

interface Props {
  product: ProductsDto;
}

const updateProductService = async ({
  product,
}: Props): Promise<ProductsEntity> => {
  return await updateProductRepository({ product });
};

export default updateProductService;
