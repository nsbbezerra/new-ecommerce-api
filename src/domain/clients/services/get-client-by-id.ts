import { GetAllClientsEntity } from '../../../entities/clients';
import AppError from '../../../shared/helpers/app-error';
import { getClientByIdRepository } from '../repositories';

interface Props {
  clientId: string;
}

const getClientByIdService = async ({
  clientId,
}: Props): Promise<GetAllClientsEntity | null> => {
  if (!clientId.length) throw new AppError('O ID do client é obrigatório', 400);
  return getClientByIdRepository({ clientId });
};

export default getClientByIdService;
