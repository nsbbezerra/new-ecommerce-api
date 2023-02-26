import AppError from '../../../shared/helpers/app-error';
import { deleteBannerRepository } from '../repositories';

interface Props {
  bannerId: string;
}

const deleteBannerService = async ({ bannerId }: Props): Promise<void> => {
  if (!bannerId.length)
    throw new AppError('O ID do banner é obrigatório.', 400);
  await deleteBannerRepository({ bannerId });
};

export default deleteBannerService;
