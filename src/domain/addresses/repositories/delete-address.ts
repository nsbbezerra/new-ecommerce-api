import { prisma } from '../../../database';

interface Props {
  addressId: string;
}

const deleteAddressRepository = async ({ addressId }: Props): Promise<void> => {
  await prisma.addresses.delete({
    where: { id: addressId },
  });
};

export default deleteAddressRepository;
