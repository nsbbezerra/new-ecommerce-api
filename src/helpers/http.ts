import { Request } from 'express';

export interface CustomProp extends Request {
  firebaseUrl?: string;
  firebaseId?: string;
  file?: any;
}
