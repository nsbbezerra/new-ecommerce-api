import { Clients } from '@prisma/client';
import { prisma } from '../../../database';

interface Props {
  client: Clients;
}

const saveClientRepository = async ({ client }: Props): Promise<void> => {
  await prisma.clients.create({
    data: {
      name: client.name,
      document: client.document,
      email: client.email,
      password: client.password,
      phone: client.phone,
    },
  });
};

export default saveClientRepository;
