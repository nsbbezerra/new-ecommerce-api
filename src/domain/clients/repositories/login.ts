import { Clients } from '@prisma/client';
import { prisma } from '../../../database';

interface Props {
  email: string;
}

const loginRepostitory = async ({ email }: Props): Promise<Clients | null> => {
  return await prisma.clients.findFirst({
    where: { email },
  });
};

export default loginRepostitory;
