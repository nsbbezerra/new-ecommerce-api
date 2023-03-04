import { saveCategoryService } from '../../../domain/categories/services';
import { Request, Response, NextFunction } from 'express';
import { CategoriesDto } from '../../../dto/categories';

interface Props {
  category: CategoriesDto;
}

export const saveCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body as Props;

  try {
    const { categoryId } = await saveCategoryService({ category });

    return res
      .status(200)
      .json({ message: 'Categoria salva com sucesso', categoryId });
  } catch (error) {
    next(error);
  }
};
