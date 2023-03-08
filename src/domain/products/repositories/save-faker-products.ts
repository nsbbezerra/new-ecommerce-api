import { prisma } from '../../../database';
import { faker } from '@faker-js/faker';

const saveFakerProductsRepository = async (): Promise<void> => {
  for (let index = 0; index < 20; index++) {
    await prisma.products.create({
      data: {
        active: true,
        description: '<p>My description</p>',
        freight_priority: 'NORMAL',
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        shipping_info: JSON.stringify({
          width: 0,
          length: 0,
          height: 0,
          weight: 0,
        }),
        slug: `my-slug-${index}`,
        category: { connect: { id: 'cletyisbv0000j5mpgr7rwrqg' } },
        collection: { connect: { id: 'cleub1nde0000j5ujkahjwo1o' } },
        promotional: false,
        stock_type: 'OFF',
        short_description: faker.commerce.productDescription(),
      },
    });
  }
};

export default saveFakerProductsRepository;
