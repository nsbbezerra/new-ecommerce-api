import { routes } from '../../../shared/router-adapter/router';
import { getAllCollectionsController } from './get-all-collections';
import { saveCollectionsController } from './save-collection';
import { updateCollectionsController } from './update-collection';

const collectionsRoutes = routes()
  .get('/get-all', getAllCollectionsController)
  .post('/save', saveCollectionsController)
  .put('/update', updateCollectionsController);

export default collectionsRoutes;
