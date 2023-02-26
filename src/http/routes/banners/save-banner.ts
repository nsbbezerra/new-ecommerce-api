import { saveBannerService } from '../../../domain/banners/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  banner: string;
}

export const saveBannerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { banner } = req.body as Props;

  try {
    await saveBannerService({ banner });

    return res.status(200).json({ message: 'Banner inserido com sucesso' });
  } catch (error) {
    next(error);
  }
};
