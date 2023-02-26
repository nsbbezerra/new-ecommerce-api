import { BannersEntity } from '../../../entities/banners';
import { prisma } from '../../../database';

const getAllBannersRepository = async (): Promise<BannersEntity[]> => {
  return await prisma.banners.findMany();
};

export default getAllBannersRepository;
