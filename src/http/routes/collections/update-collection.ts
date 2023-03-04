import { updateCollectionsService } from '../../../domain/collections/services';
import { Request, Response, NextFunction } from 'express';
import { CollectionsDto } from '../../../dto/collections';

interface Props {
  collection: CollectionsDto;
}

export const updateCollectionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { collection } = req.body as Props;

  try {
    const newCollection = await updateCollectionsService({ collection });

    return res
      .status(200)
      .json({ message: 'Sub-categoria atualizada com sucesso', newCollection });
  } catch (error) {
    next(error);
  }
};
