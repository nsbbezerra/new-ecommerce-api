import { CollectionsDto } from '../../../dto/collections';
import { prisma } from '../../../database';
import { CollectionsEntity } from '../../../entities/collections';

interface Props {
  collection: CollectionsDto;
}

const updateCollectionsRepository = async ({
  collection,
}: Props): Promise<CollectionsEntity> => {
  return await prisma.collections.update({
    where: { id: collection.id },
    data: { ...collection },
  });
};

export default updateCollectionsRepository;
