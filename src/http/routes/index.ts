import { routes } from '../../shared/router-adapter/router';
import clientRoutes from './clients';

const router = routes();

router.use('/clients', clientRoutes);

export { router };
