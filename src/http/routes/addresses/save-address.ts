import { saveAddressService } from '../../../domain/addresses/services';
import { Request, Response, NextFunction } from 'express';
import { Addresses } from '@prisma/client';

interface Props {
  address: Addresses;
}

export const saveAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.body as Props;

  try {
    await saveAddressService({ address });

    return res.status(200).json({ message: 'Endereço cadastrado com sucesso' });
  } catch (error) {
    next(error);
  }
};
