import { Addresses } from '@prisma/client';
import { prisma } from '../../../database';

interface Props {
  clientId: string;
}

const getAddressByClientIdRepository = async ({
  clientId,
}: Props): Promise<Addresses[]> => {
  return await prisma.addresses.findMany({
    where: { client_id: clientId },
  });
};

export default getAddressByClientIdRepository;
