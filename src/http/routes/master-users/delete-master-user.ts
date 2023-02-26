import { deleteMasterUserService } from '../../../domain/master-users/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  masterId: string;
}

export const deleteMasterUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { masterId } = req.params as unknown as Props;
  try {
    await deleteMasterUserService({ masterId });
    return res
      .status(200)
      .json({ message: 'Usuário máster excluído com sucesso' });
  } catch (error) {
    next(error);
  }
};
