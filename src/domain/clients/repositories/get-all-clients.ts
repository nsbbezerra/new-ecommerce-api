import { prisma } from '../../../database';
import { GetAllClientsEntity } from '../../../entities/clients';

const getAllClientsRepository = async (): Promise<GetAllClientsEntity[]> => {
  return await prisma.clients.findMany({
    orderBy: { name: 'asc' },
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

export default getAllClientsRepository;
