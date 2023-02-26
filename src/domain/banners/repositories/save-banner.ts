import { prisma } from '../../../database';

interface Props {
  banner: string;
}

const saveBannerRepository = async ({ banner }: Props): Promise<void> => {
  await prisma.banners.create({
    data: { banner },
  });
};

export default saveBannerRepository;
