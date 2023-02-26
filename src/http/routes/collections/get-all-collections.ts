import { getAllCollectionsService } from '../../../domain/collections/services';
import { Request, Response, NextFunction } from 'express';

export const getAllCollectionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await getAllCollectionsService();

    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
