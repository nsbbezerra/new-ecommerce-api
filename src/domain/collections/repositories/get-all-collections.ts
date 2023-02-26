import { CollectionsEntity } from '../../../entities/collections';
import { prisma } from '../../../database';

const getAllCollectionsRepository = async (): Promise<CollectionsEntity[]> => {
  return await prisma.collections.findMany({
    orderBy: { name: 'asc' },
  });
};

export default getAllCollectionsRepository;
