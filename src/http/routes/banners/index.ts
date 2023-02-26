import { routes } from '../../../shared/router-adapter/router';
import { deleteBannerController } from './delete-banner';
import { getAllBannersController } from './get-all-banners';
import { saveBannerController } from './save-banner';

const bannersRoutes = routes()
  .get('/get-all', getAllBannersController)
  .post('/save', saveBannerController)
  .delete('/delete/:bannerId', deleteBannerController);

export default bannersRoutes;
