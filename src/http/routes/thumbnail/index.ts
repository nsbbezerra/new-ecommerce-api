import { routes } from '../../../shared/router-adapter/router';
import Multer from 'multer';
import { upload } from '../../../services/storage';
import { setThumbnailController } from './set-thumbnail';
import { deleteThumbnailController } from './delete-thumbnail';

const multer = Multer({
  storage: Multer.memoryStorage(),
});

const thumbnailRoutes = routes()
  .put(
    '/update/:to/:id',
    multer.single('thumbnail'),
    upload,
    setThumbnailController
  )
  .put('/delete-thumbnail/:to/:id', deleteThumbnailController);

export default thumbnailRoutes;
