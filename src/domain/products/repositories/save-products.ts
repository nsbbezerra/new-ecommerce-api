import { ProductsDto } from '../../../dto/products';
import { prisma } from '../../../database';

interface Props {
  product: ProductsDto;
}

const saveProductRepository = async ({ product }: Props): Promise<void> => {
  await prisma.products.create({
    data: { ...product },
  });
};

export default saveProductRepository;
