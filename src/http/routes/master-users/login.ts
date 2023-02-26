import { loginMasterUserService } from '../../../domain/master-users/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  user: string;
  password: string;
}

export const loginMasterUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, user } = req.body as Props;
  try {
    const { token } = await loginMasterUserService({ password, user });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
