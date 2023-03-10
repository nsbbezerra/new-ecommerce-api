import { routes } from '../../../shared/router-adapter/router';
import { saveFakerProductsController } from './faker';
import { getAllProductsController } from './get-all-products';
import { saveProductController } from './save-products';
import { searchProductsController } from './search-products';
import { updateProductController } from './update-products';

const productsRoutes = routes()
  .get('/get-all/:page/:limit', getAllProductsController)
  .post('/save', saveProductController)
  .put('/update', updateProductController)
  .post('/faker', saveFakerProductsController)
  .post('/search/:search', searchProductsController);

export default productsRoutes;
