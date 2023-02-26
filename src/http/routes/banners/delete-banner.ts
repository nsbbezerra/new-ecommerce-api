import { deleteBannerService } from '../../../domain/banners/services';
import { Request, Response, NextFunction } from 'express';

interface Props {
  bannerId: string;
}

export const deleteBannerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bannerId } = req.params as unknown as Props;

  try {
    await deleteBannerService({ bannerId });

    return res.status(200).json({ message: 'Banner excluído com sucesso' });
  } catch (error) {
    next(error);
  }
};
