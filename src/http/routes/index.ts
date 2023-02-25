import { routes } from '../../shared/router-adapter/router';
import addressesRoutes from './addresses';
import clientRoutes from './clients';

const router = routes();

router.use('/clients', clientRoutes);
router.use('/addresses', addressesRoutes);

export { router };
