import { prisma } from './database';
import { app } from './server';

const APP_PORT = process.env.APP_PORT || 5001;

const server = app.listen(APP_PORT, () => {
  console.log('Server is running...');
  console.log(`Load on port: ${APP_PORT}`);
});

process.on('uncaughtException', (error, origin) => {
  console.log(`${origin} signal received. ${error}`);
});

process.on('unhandledRejection', (error) => {
  console.log(`unhandledRejection signal received. ${error}`);
});

function graceFullShutdown(event: NodeJS.Signals) {
  return (code: NodeJS.Signals) => {
    console.log(`${event} received! with ${code}`);

    server.close(() => {
      console.log('http server closed');
      prisma.$disconnect();
      console.log('DB connection closed');
      process.exit(Number(code));
    });
  };
}

process.on('SIGINT', graceFullShutdown('SIGINT'));
process.on('SIGTERM', graceFullShutdown('SIGTERM'));
