import { prisma } from '../../../database';

interface Props {
  bannerId: string;
}

const deleteBannerRepository = async ({ bannerId }: Props): Promise<void> => {
  await prisma.banners.delete({
    where: { id: bannerId },
  });
};

export default deleteBannerRepository;
