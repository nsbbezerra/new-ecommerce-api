import { MasterUserEntity } from '../../../entities/master-user';
import { prisma } from '../../../database';

interface Props {
  user: string;
}

const loginMasterUserRepository = async ({
  user,
}: Props): Promise<MasterUserEntity | null> => {
  return await prisma.masterUser.findFirst({
    where: { user },
  });
};

export default loginMasterUserRepository;
