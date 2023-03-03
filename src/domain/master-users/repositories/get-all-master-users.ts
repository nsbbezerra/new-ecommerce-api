import { prisma } from '../../../database';
import { MasterUserEntity } from '../../../entities/master-user';

const getMasterUsersRepository = async (): Promise<MasterUserEntity[]> => {
  return await prisma.masterUser.findMany({
    orderBy: { user: 'asc' },
    select: {
      id: true,
      user: true,
      active: true,
      created_at: true,
    },
  });
};

export default getMasterUsersRepository;
