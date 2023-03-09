import { saveProductOptionsService } from '../../../domain/product-options/services';
import { Request, Response, NextFunction } from 'express';
import { ProductOptionsDto } from '../../../dto/product-options';

interface Props {
  options: ProductOptionsDto;
}

export const saveProductOptionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { options } = req.body as Props;

  try {
    const productOptions = await saveProductOptionsService({ options });

    return res
      .status(200)
      .json({
        message: 'Opção de produtos cadastrada com sucesso.',
        productOptions,
      });
  } catch (error) {
    next(error);
  }
};
