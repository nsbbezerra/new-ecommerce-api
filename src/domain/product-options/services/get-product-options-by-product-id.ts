import { getProductOptionsByProductIdRepository } from '../repositories';
import { ProductOptionsEntity } from '../../../entities/product-options';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  productId: string;
}

const getProductOptionsByProductIdService = async ({
  productId,
}: Props): Promise<ProductOptionsEntity[]> => {
  if (!productId.length)
    throw new AppError('O ID do produto é obrigatório.', 400);
  return await getProductOptionsByProductIdRepository({ productId });
};

export default getProductOptionsByProductIdService;
