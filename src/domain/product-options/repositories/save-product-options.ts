import { ProductOptionsDto } from '../../../dto/product-options';
import { ProductOptionsEntity } from '../../../entities/product-options';
import { prisma } from '../../../database';

interface Props {
  options: ProductOptionsDto;
}

const saveProductOptionsRepository = async ({
  options,
}: Props): Promise<ProductOptionsEntity> => {
  return await prisma.productOptions.create({
    data: {
      content: options.content,
      headline: options.headline,
      product_id: options.product_id,
      stock: Number(options.stock),
    },
  });
};

export default saveProductOptionsRepository;
