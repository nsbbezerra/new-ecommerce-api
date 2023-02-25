import { Addresses } from '@prisma/client';
import { prisma } from '../../../database';

interface Props {
  address: Addresses;
}

const saveAddressRepository = async ({ address }: Props): Promise<void> => {
  await prisma.addresses.create({
    data: { ...address },
  });
};

export default saveAddressRepository;
