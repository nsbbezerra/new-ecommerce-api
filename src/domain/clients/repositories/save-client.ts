import { prisma } from '../../../database';
import { ClientsDto } from '../../../dto/clients';

interface Props {
  client: ClientsDto;
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
