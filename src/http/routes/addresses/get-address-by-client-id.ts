import { getAddressByClientIdService } from '../../../domain/addresses/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  clientId: string;
}

export const getAddressByClientIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { clientId } = req.params as unknown as Props;

  try {
    const address = await getAddressByClientIdService({ clientId });

    return res.status(200).json(address);
  } catch (error) {
    next(error);
  }
};
