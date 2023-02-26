import { saveMasterUserRepository } from '../repositories';
import { MasterUserDto } from '../../../dto/master-user';
import AppError from '../../../shared/helpers/app-error';

interface Props {
  master: MasterUserDto;
}

const saveMasterUserService = async ({ master }: Props): Promise<void> => {
  if (!master)
    throw new AppError(
      'As informações do usuário máster são obrigatórias',
      400
    );
  await saveMasterUserRepository({ master });
};

export default saveMasterUserService;
