import { routes } from '../../../shared/router-adapter/router';
import { getAllClientsController } from './get-all-clients';
import { getClientByIdController } from './get-client-by-id';
import { loginController } from './login';
import { saveClientController } from './save-client';

const clientRoutes = routes()
  .get('/get-all', getAllClientsController)
  .post('/save', saveClientController)
  .get('/find-by-id/:clientId', getClientByIdController)
  .post('/login', loginController);

export default clientRoutes;
