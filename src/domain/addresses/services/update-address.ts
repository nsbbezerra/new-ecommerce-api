import { Addresses } from '@prisma/client';
import { UpdateAddressDto } from '../../../dto/address';
import AppError from '../../../shared/helpers/app-error';
import { updateAddressRepository } from '../repositories';

interface Props {
  address: UpdateAddressDto;
}

const updateAddressService = async ({ address }: Props): Promise<Addresses> => {
  if (!address)
    throw new AppError('As informações do endereço são obrigatórias', 400);
  return await updateAddressRepository({ address });
};

export default updateAddressService;
