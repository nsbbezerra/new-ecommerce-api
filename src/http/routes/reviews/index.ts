import { routes } from '../../../shared/router-adapter/router';
import { getProductReviewsController } from './get-product-review';
import { saveReviewController } from './save-review';

const reviewsRoutes = routes()
  .get('/get-product-review/:productId', getProductReviewsController)
  .post('/save', saveReviewController);

export default reviewsRoutes;
