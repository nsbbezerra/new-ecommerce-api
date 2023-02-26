import { getAllCategoriesService } from '../../../domain/categories/services';
import { Request, Response, NextFunction } from 'express';

export const getAllCategoriesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await getAllCategoriesService();

    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
