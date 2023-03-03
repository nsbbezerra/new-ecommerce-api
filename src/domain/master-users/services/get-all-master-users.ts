import { getMasterUsersRepository } from '../repositories';
import { MasterUserEntity } from '../../../entities/master-user';

const getMasterUsersService = async (): Promise<MasterUserEntity[]> => {
  return await getMasterUsersRepository();
};

export default getMasterUsersService;
