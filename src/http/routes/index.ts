import { routes } from '../../shared/router-adapter/router';
import addressesRoutes from './addresses';
import bannersRoutes from './banners';
import categoriesRoutes from './categories';
import clientRoutes from './clients';
import collectionsRoutes from './collections';
import masterUsersRoutes from './master-users';
import productOptionsRoutes from './product-options';
import productsRoutes from './products';
import reviewsRoutes from './reviews';
import thumbnailRoutes from './thumbnail';

const router = routes();

router.use('/clients', clientRoutes);
router.use('/addresses', addressesRoutes);
router.use('/categories', categoriesRoutes);
router.use('/collections', collectionsRoutes);
router.use('/products', productsRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/product-options', productOptionsRoutes);
router.use('/master-users', masterUsersRoutes);
router.use('/banners', bannersRoutes);
router.use('/thumbnail', thumbnailRoutes);

export { router };
