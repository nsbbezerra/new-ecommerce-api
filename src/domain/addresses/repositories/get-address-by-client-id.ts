import { prisma } from '../../../database';
import { AddressesEntity } from '../../../entities/address';

interface Props {
  clientId: string;
}

const getAddressByClientIdRepository = async ({
  clientId,
}: Props): Promise<AddressesEntity[]> => {
  return await prisma.addresses.findMany({
    where: { client_id: clientId },
  });
};

export default getAddressByClientIdRepository;
