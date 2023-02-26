import { ProductsDto } from '../../../dto/products';
import { saveProductRepository } from '../repositories';

interface Props {
  product: ProductsDto;
}

const saveProductService = async ({ product }: Props): Promise<void> => {
  await saveProductRepository({ product });
};

export default saveProductService;
