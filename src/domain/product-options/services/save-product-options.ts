import { saveProductOptionsRepository } from '../repositories';
import { ProductOptionsDto } from '../../../dto/product-options';
import AppError from '../../../shared/helpers/app-error';
import { ProductOptionsEntity } from '../../../entities/product-options';

interface Props {
  options: ProductOptionsDto;
}

const saveProductOptionsService = async ({
  options,
}: Props): Promise<ProductOptionsEntity> => {
  if (!options)
    throw new AppError(
      'As informações das opções de produto são obrigatórias',
      400
    );
  return await saveProductOptionsRepository({ options });
};

export default saveProductOptionsService;
