import express from 'express';
import analyticsRoutes from './controllers/analytics/analytics.routes';
import { PrismaClient } from './generated/client';
import cors from 'cors';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3002;

const prisma = new PrismaClient();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 86400,
  }),
  express.json(),
  analyticsRoutes,
);

const main = async () => {
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`Servidor corriendo en http://localhost:${port}`);
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
