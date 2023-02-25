import AppError from '../../../shared/helpers/app-error';
import { deleteAddressRepository } from '../repositories';

interface Props {
  addressId: string;
}

const deleteAddressService = async ({ addressId }: Props): Promise<void> => {
  if (!addressId.length)
    throw new AppError('O ID do endereço é obrigatório', 400);
  await deleteAddressRepository({ addressId });
};

export default deleteAddressService;
