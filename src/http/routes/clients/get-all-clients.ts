import { getAllClientsService } from '../../../domain/clients/services';
import { Request, Response, NextFunction } from 'express';

export const getAllClientsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const clients = await getAllClientsService();

    return res.status(200).json(clients);
  } catch (error) {
    next(error);
  }
};
