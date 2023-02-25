import { Addresses } from '@prisma/client';
import AppError from '../../../shared/helpers/app-error';
import { saveAddressRepository } from '../repositories';

interface Props {
  address: Addresses;
}

const saveAddressService = async ({ address }: Props): Promise<void> => {
  if (!address)
    throw new AppError('As informações do endereço são obrigatórias', 400);
  await saveAddressRepository({ address });
};

export default saveAddressService;
