import { routes } from '../../../shared/router-adapter/router';
import { deleteMasterUserController } from './delete-master-user';
import { loginMasterUserController } from './login';
import { saveMasterUserController } from './save-master-user';

const masterUsersRoutes = routes()
  .post('/login', loginMasterUserController)
  .post('/save', saveMasterUserController)
  .delete('/delete/:masterId', deleteMasterUserController);

export default masterUsersRoutes;
