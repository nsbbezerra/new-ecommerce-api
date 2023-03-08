import { deleteProductOptionsRepository } from '../repositories';

interface Props {
  productId: string;
}

const deleteProductOptionsService = async ({
  productId,
}: Props): Promise<void> => {
  await deleteProductOptionsRepository({ productId });
};

export default deleteProductOptionsService;
