import { ProductsDto } from '../../../dto/products';
import { ProductsEntity } from '../../../entities/products';
import { prisma } from '../../../database';

interface Props {
  product: ProductsDto;
}

const saveProductRepository = async ({
  product,
}: Props): Promise<ProductsEntity> => {
  return await prisma.products.create({
    data: { ...product },
  });
};

export default saveProductRepository;
