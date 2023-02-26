import { ProductOptionsEntity } from '../../../entities/product-options';
import { ProductOptionsDto } from '../../../dto/product-options';
import { prisma } from '../../../database';

interface Props {
  options: ProductOptionsDto;
}

const updateProductOptionsRepository = async ({
  options,
}: Props): Promise<ProductOptionsEntity> => {
  return await prisma.productOptions.update({
    where: { id: options.id },
    data: { ...options },
  });
};

export default updateProductOptionsRepository;
