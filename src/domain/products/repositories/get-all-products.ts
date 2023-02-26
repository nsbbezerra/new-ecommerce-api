import { ProductsWithRelationshipEntity } from '../../../entities/products';
import { prisma } from '../../../database';

const getAllProductsRepository = async (): Promise<
  ProductsWithRelationshipEntity[]
> => {
  return await prisma.products.findMany({
    select: {
      active: true,
      created_at: true,
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
    },
  });
};

export default getAllProductsRepository;
