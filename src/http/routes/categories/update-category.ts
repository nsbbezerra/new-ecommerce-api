import { NextFunction, Request, Response } from 'express';
import { updateCategoryService } from '../../../domain/categories/services';
import { CategoriesDto } from '../../../dto/categories';

interface Props {
  category: CategoriesDto;
}

export const updateCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body as Props;

  try {
    const newCategory = await updateCategoryService({ category });

    return res
      .status(200)
      .json({ message: 'Categoria atualizada com sucesso', newCategory });
  } catch (error) {
    next(error);
  }
};
