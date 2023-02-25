import { saveClientService } from '../../../domain/clients/services';
import { Request, Response, NextFunction } from 'express';
import { Clients } from '@prisma/client';

interface Props {
  client: Clients;
}

export const saveClientController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { client } = req.body as Props;

  try {
    await saveClientService({ client });
    return res.status(201).json({ message: 'Cadastro realizado com suceso' });
  } catch (error) {
    next(error);
  }
};
