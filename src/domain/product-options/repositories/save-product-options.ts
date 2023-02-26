import { ProductOptionsDto } from '../../../dto/product-options';
import { prisma } from '../../../database';

interface Props {
  options: ProductOptionsDto;
}

const saveProductOptionsRepository = async ({
  options,
}: Props): Promise<void> => {
  await prisma.productOptions.create({
    data: { ...options },
  });
};

export default saveProductOptionsRepository;
