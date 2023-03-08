import { ProductsWithRelationshipEntity } from '../../../entities/products';
import { prisma } from '../../../database';

interface Props {
  page: number;
  limit: number;
}

interface Response {
  products: ProductsWithRelationshipEntity[];
  count: number;
}

const getAllProductsRepository = async ({
  limit,
  page,
}: Props): Promise<Response> => {
  const products = await prisma.products.findMany({
    skip: Number(page),
    take: Number(limit),
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
      },
    },
    orderBy: {
      name: 'asc',
    },
  });
  const { _count } = await prisma.products.aggregate({
    _count: true,
  });

  return { products, count: _count };
};

export default getAllProductsRepository;
