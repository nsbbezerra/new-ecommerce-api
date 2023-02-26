import { ProductOptionsEntity } from '../../../entities/product-options';
import { prisma } from '../../../database';

interface Props {
  productId: string;
}

const getProductOptionsByProductIdRepository = async ({
  productId,
}: Props): Promise<ProductOptionsEntity[]> => {
  return await prisma.productOptions.findMany({
    where: { product_id: productId },
  });
};

export default getProductOptionsByProductIdRepository;
