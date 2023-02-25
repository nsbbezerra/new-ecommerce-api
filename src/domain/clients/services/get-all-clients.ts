import { GetAllClientsEntity } from '../../../entities/clients';
import { getAllClientsRepository } from '../repositories';

const getAllClientsService = async (): Promise<GetAllClientsEntity[]> => {
  return await getAllClientsRepository();
};

export default getAllClientsService;
