import { routes } from '../../../shared/router-adapter/router';
import { deleteAddressController } from './delete-address';
import { getAddressByClientIdController } from './get-address-by-client-id';
import { saveAddressController } from './save-address';
import { updateAddressController } from './update-address';

const addressesRoutes = routes()
  .post('/save', saveAddressController)
  .get('/get-by-client-id/:clientId', getAddressByClientIdController)
  .put('/update', updateAddressController)
  .delete('/delete/:addressId', deleteAddressController);

export default addressesRoutes;
