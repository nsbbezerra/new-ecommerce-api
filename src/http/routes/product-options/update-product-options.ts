import { updateProductOptionsService } from '../../../domain/product-options/services';
import { ProductOptionsDto } from '../../../dto/product-options';
import { Request, Response, NextFunction } from 'express';

interface Props {
  options: ProductOptionsDto;
}

export const updateProductOptionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { options } = req.body as Props;

  try {
    const newProductOptions = await updateProductOptionsService({ options });

    return res
      .status(200)
      .json({
        message: 'Opção de produto alterada com sucesso',
        newProductOptions,
      });
  } catch (error) {
    next(error);
  }
};
