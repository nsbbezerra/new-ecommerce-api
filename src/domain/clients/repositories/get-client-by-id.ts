import { GetAllClientsEntity } from '../../../entities/clients';
import { prisma } from '../../../database';

interface Props {
  clientId: string;
}

const getClientByIdRepository = async ({
  clientId,
}: Props): Promise<GetAllClientsEntity | null> => {
  return await prisma.clients.findFirst({
    where: { id: clientId },
    select: {
      id: true,
      document: true,
      email: true,
      name: true,
      phone: true,
      password: false,
      created_at: false,
    },
  });
};

export default getClientByIdRepository;
