import { getAllBannersService } from '../../../domain/banners/services';
import { Request, Response, NextFunction } from 'express';

export const getAllBannersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const banners = await getAllBannersService();

    return res.status(200).json(banners);
  } catch (error) {
    next(error);
  }
};
