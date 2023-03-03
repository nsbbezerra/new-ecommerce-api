import { saveMasterUserService } from '../../../domain/master-users/services';
import { MasterUserDto } from '../../../dto/master-user';
import { Request, Response, NextFunction } from 'express';

interface Props {
  master: MasterUserDto;
}

export const saveMasterUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { master } = req.body as Props;

  try {
    await saveMasterUserService({ master });
    return res
      .status(200)
      .json({ message: 'Usuário máster salvo com sucesso' });
  } catch (error) {
    next(error);
  }
};
