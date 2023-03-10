import { AddressesEntity } from '../../../entities/address';
import AppError from '../../../shared/helpers/app-error';
import { getAddressByClientIdRepository } from '../repositories';

interface Props {
  clientId: string;
}

const getAddressByClientIdService = async ({
  clientId,
}: Props): Promise<AddressesEntity[]> => {
  if (!clientId.length)
    throw new AppError('O ID do cliente é obrigatório', 400);
  return await getAddressByClientIdRepository({ clientId });
};

export default getAddressByClientIdService;
