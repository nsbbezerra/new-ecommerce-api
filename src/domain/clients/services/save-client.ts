import { saveClientRepository } from '../repositories';
import { Clients } from '@prisma/client';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  client: Clients;
}

const saveClientService = async ({ client }: Props): Promise<void> => {
  if (!client) throw new AppError('Os dados do cliente são obrigatórios', 400);
  await saveClientRepository({ client });
};

export default saveClientService;
