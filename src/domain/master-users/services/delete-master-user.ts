import { deleteMasterUserRepository } from '../repositories';

interface Props {
  masterId: string;
}

const deleteMasterUserService = async ({ masterId }: Props): Promise<void> => {
  await deleteMasterUserRepository({ masterId });
};

export default deleteMasterUserService;
