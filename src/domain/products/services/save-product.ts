import { ProductsDto } from '../../../dto/products';
import { saveProductRepository } from '../repositories';
import { ProductsEntity } from '../../../entities/products';

interface Props {
  product: ProductsDto;
}

interface Response {
  id: string;
}

const saveProductService = async ({ product }: Props): Promise<Response> => {
  const { id } = await saveProductRepository({ product });

  return { id };
};

export default saveProductService;
