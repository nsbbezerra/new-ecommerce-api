import { saveProductOptionsRepository } from '../repositories';
import { ProductOptionsDto } from '../../../dto/product-options';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  options: ProductOptionsDto;
}

const saveProductOptionsService = async ({ options }: Props): Promise<void> => {
  if (!options)
    throw new AppError(
      'As informações das opções de produto são obrigatórias',
      400
    );
  await saveProductOptionsRepository({ options });
};

export default saveProductOptionsService;
