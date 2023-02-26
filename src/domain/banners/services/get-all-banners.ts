import { BannersEntity } from '../../../entities/banners';
import { getAllBannersRepository } from '../repositories';

const getAllBannersService = async (): Promise<BannersEntity[]> => {
  return await getAllBannersRepository();
};

export default getAllBannersService;
