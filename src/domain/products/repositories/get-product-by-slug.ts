import { ProductsEntity } from '../../../entities/products';
import { prisma } from '../../../database';

interface Props {
  slug: string;
}

const getProductBySlugRepository = async ({
  slug,
}: Props): Promise<ProductsEntity | null> => {
  return await prisma.products.findFirst({
    where: { slug },
  });
};

export default getProductBySlugRepository;
