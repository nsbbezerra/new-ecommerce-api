import { prisma } from '../../../database';
import { UpdateAddressDto } from '../../../dto/address';
import { AddressesEntity } from '../../../entities/address';

interface Props {
  address: UpdateAddressDto;
}

const updateAddressRepository = async ({
  address,
}: Props): Promise<AddressesEntity> => {
  return await prisma.addresses.update({
    where: { id: address.id },
    data: {
      cep: address.cep,
      city: address.city,
      comp: address.comp,
      default: address.default,
      district: address.district,
      number: address.number,
      state: address.state,
      street: address.street,
    },
  });
};

export default updateAddressRepository;
