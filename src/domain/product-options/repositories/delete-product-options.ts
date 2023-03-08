import { prisma } from '../../../database';

interface Props {
  productId: string;
}

const deleteProductOptionsRepository = async ({
  productId,
}: Props): Promise<void> => {
  await prisma.productOptions.delete({
    where: { id: productId },
  });
};

export default deleteProductOptionsRepository;
