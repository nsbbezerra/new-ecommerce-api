import { Addresses } from '@prisma/client';
import AppError from '../../../shared/helpers/app-error';
import { getAddressByClientIdRepository } from '../repositories';

interface Props {
  clientId: string;
}

const getAddressByClientIdService = async ({
  clientId,
}: Props): Promise<Addresses[]> => {
  if (!clientId.length)
    throw new AppError('O ID do cliente é obrigatório', 400);
  return await getAddressByClientIdRepository({ clientId });
};

export default getAddressByClientIdService;
