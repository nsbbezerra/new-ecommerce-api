import { setThumbnailService } from '../../../domain/thumbnail/services';
import { NextFunction, Response } from 'express';
import { CustomProp } from '../../../helpers/http';

interface RequestParams {
  to: string;
  id: string;
}

export const setThumbnailController = async (
  req: CustomProp,
  res: Response,
  next: NextFunction
) => {
  const { id, to } = req.params as unknown as RequestParams;

  const { firebaseId, firebaseUrl } = req;

  try {
    await setThumbnailService({
      to,
      id,
      thumbnail: String(firebaseUrl),
      thumbnailId: String(firebaseId),
    });

    return res.status(200).json({ message: 'Imagem inserida com sucesso' });
  } catch (error) {
    next(error);
  }
};
