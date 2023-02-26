import { ClientsLoginEntity } from '../../../entities/clients';
import { prisma } from '../../../database';

interface Props {
  email: string;
}

const loginRepostitory = async ({
  email,
}: Props): Promise<ClientsLoginEntity | null> => {
  return await prisma.clients.findFirst({
    where: { email },
  });
};

export default loginRepostitory;
