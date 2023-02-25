import { deleteAddressService } from '../../../domain/addresses/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  addressId: string;
}

export const deleteAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { addressId } = req.params as unknown as Props;

  try {
    const address = await deleteAddressService({ addressId });

    return res.status(200).json({ message: 'Endereço excluído com sucesso' });
  } catch (error) {
    next(error);
  }
};
