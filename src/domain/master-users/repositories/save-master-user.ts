import { MasterUserDto } from '../../../dto/master-user';
import { prisma } from '../../../database';

interface Props {
  master: MasterUserDto;
}

const saveMasterUserRepository = async ({ master }: Props): Promise<void> => {
  await prisma.masterUser.create({
    data: { ...master },
  });
};

export default saveMasterUserRepository;
