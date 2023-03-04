import { CollectionsWithRelationshipEntity } from '../../../entities/collections';
import { prisma } from '../../../database';

const getAllCollectionsRepository = async (): Promise<
  CollectionsWithRelationshipEntity[]
> => {
  return await prisma.collections.findMany({
    orderBy: { name: 'asc' },
    select: {
      id: true,
      active: true,
      category_id: true,
      created_at: true,
      name: true,
      slug: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });
};

export default getAllCollectionsRepository;
