import { CollectionsDto } from '../../../dto/collections';
import { prisma } from '../../../database';

interface Props {
  collection: CollectionsDto;
}

const saveCollectionsRepository = async ({
  collection,
}: Props): Promise<void> => {
  await prisma.collections.create({
    data: { ...collection },
  });
};

export default saveCollectionsRepository;
