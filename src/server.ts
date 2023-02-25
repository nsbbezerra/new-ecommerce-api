import * as dotenv from 'dotenv';
dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { router } from './http/routes';

const app = express();

interface HTTPError extends Error {
  status?: number;
}

app.use(cors());
app.use(express.json());
app.use(router);
app.use((error: HTTPError, req: Request, res: Response, next: NextFunction) => {
  const message = error.message;
  return res.status(400).json({
    message: `Um erro ocorreu ao processar a operação. ERRO: ${message}`,
    error: { message, status: error.status },
  });
});

export { app };
