import { prisma } from '../../../database';

interface Props {
  masterId: string;
}

const deleteMasterUserRepository = async ({
  masterId,
}: Props): Promise<void> => {
  await prisma.masterUser.delete({
    where: { id: masterId },
  });
};

export default deleteMasterUserRepository;
