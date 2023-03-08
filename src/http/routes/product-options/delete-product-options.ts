import { Request, Response, NextFunction } from 'express';
import { deleteProductOptionsService } from '../../../domain/product-options/services';

interface Props {
  productId: string;
}

export const deleteProductOptionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params as unknown as Props;

  try {
    await deleteProductOptionsService({
      productId,
    });

    return res
      .status(200)
      .json({ message: 'Informação excluída com sucesso.' });
  } catch (error) {
    next(error);
  }
};
