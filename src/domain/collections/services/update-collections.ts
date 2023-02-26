import { updateCollectionsRepository } from '../repositories';
import { CollectionsDto } from '../../../dto/collections';
import { CollectionsEntity } from '../../../entities/collections';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  collection: CollectionsDto;
}

const updateCollectionsService = async ({
  collection,
}: Props): Promise<CollectionsEntity> => {
  if (!collection)
    throw new AppError('Dados da sub-categoria são obrigatórios.', 400);
  return await updateCollectionsRepository({ collection });
};

export default updateCollectionsService;
