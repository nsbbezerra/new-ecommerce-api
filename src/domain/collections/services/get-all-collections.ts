import { CollectionsWithRelationshipEntity } from '../../../entities/collections';
import { getAllCollectionsRepository } from '../repositories';

const getAllCollectionsService = async (): Promise<
  CollectionsWithRelationshipEntity[]
> => {
  return await getAllCollectionsRepository();
};

export default getAllCollectionsService;
