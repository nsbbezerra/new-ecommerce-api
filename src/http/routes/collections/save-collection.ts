import { saveCollectionsService } from '../../../domain/collections/services';
import { Request, Response, NextFunction } from 'express';
import { CollectionsDto } from '../../../dto/collections';

interface Props {
  collection: CollectionsDto;
}

export const saveCollectionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection } = req.body as Props;

  try {
    await saveCollectionsService({ collection });

    return res
      .status(200)
      .json({ message: 'Sub-categoria cadastrada com sucesso' });
  } catch (error) {
    next(error);
  }
};
