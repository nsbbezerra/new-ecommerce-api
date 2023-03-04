import { deleteThumbnailService } from '../../../domain/thumbnail/services';
import { Request, Response, NextFunction } from 'express';

interface RequestParams {
  id: string;
  to: string;
}

interface RequestBody {
  thumbnailId: string;
}

export const deleteThumbnailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id, to } = req.params as unknown as RequestParams;

  const { thumbnailId } = req.body as RequestBody;

  try {
    await deleteThumbnailService({ id, thumbnailId, to });

    return res.status(200).json({ message: 'Imagem removida com sucesso' });
  } catch (error) {
    next(error);
  }
};
