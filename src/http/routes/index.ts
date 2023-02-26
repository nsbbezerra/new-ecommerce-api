import { routes } from '../../shared/router-adapter/router';
import addressesRoutes from './addresses';
import categoriesRoutes from './categories';
import clientRoutes from './clients';
import collectionsRoutes from './collections';
import productsRoutes from './products';

const router = routes();

router.use('/clients', clientRoutes);
router.use('/addresses', addressesRoutes);
router.use('/categories', categoriesRoutes);
router.use('/collections', collectionsRoutes);
router.use('/products', productsRoutes);

export { router };
