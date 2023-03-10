import { updateProductOptionsRepository } from '../repositories';
import { ProductOptionsDto } from '../../../dto/product-options';
import AppError from '../../../shared/helpers/app-error';
import { ProductOptionsEntity } from '../../../entities/product-options';

interface Props {
  options: ProductOptionsDto;
}

const updateProductOptionsService = async ({
  options,
}: Props): Promise<ProductOptionsEntity> => {
  if (!options)
    throw new AppError(
      'As informações das opções de produto são obrigatórias',
      400
    );
  return await updateProductOptionsRepository({
    options: {
      content: options.content,
      id: options.id,
      headline: options.headline,
      stock: Number(options.stock),
    },
  });
};

export default updateProductOptionsService;
