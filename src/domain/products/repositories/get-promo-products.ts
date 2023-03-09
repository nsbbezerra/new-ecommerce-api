import { ProductsWithRelationshipEntity } from '../../../entities/products';
import { prisma } from '../../../database';

const getPromoProductsRepository = async (): Promise<
  ProductsWithRelationshipEntity[]
> => {
  return await prisma.products.findMany({
    where: {
      promotional: true,
    },
    select: {
      active: true,
      created_at: true,
      stock: true,
      stock_type: true,
      id: true,
      description: true,
      name: true,
      promo_rate: true,
      freight_priority: true,
      promotional: true,
      request: true,
      shipping_info: true,
      short_description: true,
      price: true,
      slug: true,
      thumbnail: true,
      thumbnail_id: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
      collection: {
        select: {
          id: true,
          name: true,
        },
      },
      ProductOptions: {
        select: {
          id: true,
          content: true,
          headline: true,
          stock: true,
          product_id: true,
        },
        orderBy: {
          headline: 'asc',
        },
      },
    },
    orderBy: {
      name: 'asc',
    },
  });
};

export default getPromoProductsRepository;
