import { bucket } from '../../../services/storage';
import AppError from '../../../shared/helpers/app-error';
import {
  deleteCategoryThumbnailRepository,
  deleteProductThumbnailRepository,
} from '../repositories';

interface Props {
  id: string;
  to: string;
  thumbnailId: string;
}

async function deleteThumbnail(to: string, id: string) {
  if (to === 'category') {
    await deleteCategoryThumbnailRepository({ categoryId: id });
  } else {
    await deleteProductThumbnailRepository({ productId: id });
  }
}

const deleteThumbnailService = async ({
  id,
  to,
  thumbnailId,
}: Props): Promise<void> => {
  try {
    await bucket.file(thumbnailId).delete();

    deleteThumbnail(to, id);
  } catch (error) {
    throw new AppError('Ocorreu um erro ao excluir a imagem', 400);
  }
};

export default deleteThumbnailService;
