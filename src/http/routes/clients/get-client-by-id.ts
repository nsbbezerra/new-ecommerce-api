import { getClientByIdService } from '../../../domain/clients/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  clientId: string;
}

export const getClientByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { clientId } = req.params as unknown as Props;
  try {
    const client = await getClientByIdService({ clientId });
    return res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};
