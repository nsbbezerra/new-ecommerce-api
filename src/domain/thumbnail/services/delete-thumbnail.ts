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
  bucket
    .file(thumbnailId)
    .delete()
    .then(() => {
      deleteThumbnail(to, id);
    })
    .catch((error) => {
      const { message } = error as Error;
      throw new AppError(message, 400);
    });
};

export default deleteThumbnailService;
