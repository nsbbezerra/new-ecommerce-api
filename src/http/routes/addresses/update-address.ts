import { updateAddressService } from '../../../domain/addresses/services';
import { Request, Response, NextFunction } from 'express';
import { UpdateAddressDto } from '../../../dto/address';

interface Props {
  address: UpdateAddressDto;
}

export const updateAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { address } = req.body as Props;

  try {
    const newAddress = await updateAddressService({ address });

    return res
      .status(200)
      .json({ message: 'Endereço alterado com sucesso', newAddress });
  } catch (error) {
    next(error);
  }
};
