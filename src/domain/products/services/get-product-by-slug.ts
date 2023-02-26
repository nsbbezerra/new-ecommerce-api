import { ProductsEntity } from '../../../entities/products';
import AppError from '../../../shared/helpers/app-error';
import { getProductBySlugRepository } from '../repositories';

interface Props {
  slug: string;
}

const getProductBySlugService = async ({
  slug,
}: Props): Promise<ProductsEntity | null> => {
  if (!slug.length) throw new AppError('Slug é obrigatório.', 400);
  return await getProductBySlugRepository({ slug });
};

export default getProductBySlugService;
