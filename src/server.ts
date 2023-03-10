import * as dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './http/routes';
import { Prisma } from '@prisma/client';

const app = express();

interface HTTPError extends Error {
  status?: number;
}

app.use(cors());
app.use(express.json());
app.use(router);
app.use((error: HTTPError, req: Request, res: Response, next: NextFunction) => {
  let message;

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    message = error.message;
  } else {
    message = error.message;
  }

  console.error(message);

  return res.status(400).json({
    message,
  });
});

export { app };
