import { routes } from '../../../shared/router-adapter/router';
import { getAllCategoriesController } from './get-all-categories';
import { saveCategoryController } from './save-categories';
import { updateCategoryController } from './update-category';

const categoriesRoutes = routes()
  .post('/save', saveCategoryController)
  .get('/get-all', getAllCategoriesController)
  .put('/update', updateCategoryController);

export default categoriesRoutes;
