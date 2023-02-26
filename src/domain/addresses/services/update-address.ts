import { UpdateAddressDto } from '../../../dto/address';
import { AddressesEntity } from '../../../entities/address';
import AppError from '../../../shared/helpers/app-error';
import { updateAddressRepository } from '../repositories';

interface Props {
  address: UpdateAddressDto;
}

const updateAddressService = async ({
  address,
}: Props): Promise<AddressesEntity> => {
  if (!address)
    throw new AppError('As informações do endereço são obrigatórias', 400);
  return await updateAddressRepository({ address });
};

export default updateAddressService;
