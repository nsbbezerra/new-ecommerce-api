import { app } from './server';

const APP_PORT = process.env.APP_PORT || 5001;

app.listen(APP_PORT, () => {
  console.log('Server is running...');
  console.log(`Load on port: ${APP_PORT}`);
});
