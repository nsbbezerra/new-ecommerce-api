import { ProductsDto } from '../../../dto/products';
import { prisma } from '../../../database';
import { ProductsEntity } from '../../../entities/products';

interface Props {
  product: ProductsDto;
}

const updateProductRepository = async ({
  product,
}: Props): Promise<ProductsEntity> => {
  return await prisma.products.update({
    where: { id: product.id },
    data: { ...product },
  });
};

export default updateProductRepository;
