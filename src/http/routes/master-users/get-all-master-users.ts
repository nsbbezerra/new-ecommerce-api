import { getMasterUsersService } from '../../../domain/master-users/services';
import { Request, Response, NextFunction } from 'express';

export const getMasterUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const masters = await getMasterUsersService();
    return res.status(200).json(masters);
  } catch (error) {
    next(error);
  }
};
