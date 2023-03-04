import {
  setCategoryThumbnailRepository,
  setProductThumbnailRepository,
} from '../repositories';

interface Props {
  thumbnail: string;
  thumbnailId: string;
  id: string;
  to: string;
}

const setThumbnailService = async ({
  id,
  thumbnail,
  thumbnailId,
  to,
}: Props): Promise<void> => {
  if (to === 'category') {
    await setCategoryThumbnailRepository({
      categoryId: id,
      thumbnail,
      thumbnailId,
    });
  } else {
    await setProductThumbnailRepository({
      productId: id,
      thumbnail,
      thumbnailId,
    });
  }
};

export default setThumbnailService;
