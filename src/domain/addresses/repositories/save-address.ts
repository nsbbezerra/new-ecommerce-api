import { prisma } from '../../../database';
import { UpdateAddressDto } from '../../../dto/address';

interface Props {
  address: UpdateAddressDto;
}

const saveAddressRepository = async ({ address }: Props): Promise<void> => {
  await prisma.addresses.create({
    data: { ...address },
  });
};

export default saveAddressRepository;
