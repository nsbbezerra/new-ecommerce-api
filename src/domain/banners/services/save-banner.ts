import AppError from '../../../shared/helpers/app-error';
import { saveBannerRepository } from '../repositories';

interface Props {
  banner: string;
}

const saveBannerService = async ({ banner }: Props): Promise<void> => {
  if (!banner.length) throw new AppError('Insira uma URL para o banner', 400);
  await saveBannerRepository({ banner });
};

export default saveBannerService;
