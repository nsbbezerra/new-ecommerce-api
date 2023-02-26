import { routes } from '../../../shared/router-adapter/router';
import { getProductOptionsByProductIdController } from './get-product-options-by-product-id';
import { saveProductOptionsController } from './save-product-options';
import { updateProductOptionsController } from './update-product-options';

const productOptionsRoutes = routes()
  .get('/get-by-product-id/:productId', getProductOptionsByProductIdController)
  .post('/save', saveProductOptionsController)
  .put('/update', updateProductOptionsController);

export default productOptionsRoutes;
