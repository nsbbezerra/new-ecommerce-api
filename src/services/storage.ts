import { NextFunction, Response } from 'express';
import admin from 'firebase-admin';
import { CustomProp } from '../helpers/http';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
    privateKey: process.env.FIREBASE_PRIVATE_KEY || '',
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
});

const bucket = admin.storage().bucket();

const upload = (req: CustomProp, res: Response, next: NextFunction) => {
  if (!req.file) {
    next();
  }

  const image = req.file;
  const name = `${Date.now()}.${image?.originalname.split('.').pop()}`;
  const file = bucket.file(name);

  const stream = file.createWriteStream({
    metadata: {
      contentType: image?.mimetype,
    },
  });
  stream.on('error', (err) => {
    next(err);
  });
  stream.on('finish', async () => {
    await file.makePublic();
    req.firebaseUrl = file.publicUrl();
    req.firebaseId = file.id;
    next();
  });
  stream.end(image?.buffer);
};

export { upload, bucket };
