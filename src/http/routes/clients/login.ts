import { loginService } from '../../../domain/clients/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  email: string;
  password: string;
}

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, email } = req.body as Props;
  try {
    const client = await loginService({ password, email });
    return res.status(200).json(client);
  } catch (error) {
    next(error);
  }
};
