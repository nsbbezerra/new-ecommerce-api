import { CollectionsEntity } from '../../../entities/collections';
import { getAllCollectionsRepository } from '../repositories';

const getAllCollectionsService = async (): Promise<CollectionsEntity[]> => {
  return await getAllCollectionsRepository();
};

export default getAllCollectionsService;
