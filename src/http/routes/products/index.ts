import { routes } from '../../../shared/router-adapter/router';
import { getAllProductsController } from './get-all-products';
import { saveProductController } from './save-products';
import { updateProductController } from './update-products';

const productsRoutes = routes()
  .get('/get-all', getAllProductsController)
  .post('/save', saveProductController)
  .put('/update', updateProductController);

export default productsRoutes;
