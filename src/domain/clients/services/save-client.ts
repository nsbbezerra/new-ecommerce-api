import { saveClientRepository } from '../repositories';
import AppError from '../../../shared/helpers/app-error';
import { ClientsDto } from '../../../dto/clients';

interface Props {
  client: ClientsDto;
}

const saveClientService = async ({ client }: Props): Promise<void> => {
  if (!client) throw new AppError('Os dados do cliente são obrigatórios', 400);
  await saveClientRepository({ client });
};

export default saveClientService;
