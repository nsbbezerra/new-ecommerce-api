import { saveCollectionsRepository } from '../repositories';
import { CollectionsDto } from '../../../dto/collections';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  collection: CollectionsDto;
}

const saveCollectionsService = async ({ collection }: Props): Promise<void> => {
  if (!collection)
    throw new AppError('Dados da sub-categoria são obrigatórios.', 400);
  await saveCollectionsRepository({ collection });
};

export default saveCollectionsService;
