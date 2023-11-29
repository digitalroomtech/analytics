import express from 'express';
import analyticsRoutes from './controllers/analytics/analytics.routes';
import { PrismaClient } from '../prisma/generated/client';
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
    allowedHeaders: ['Authorization', 'Content-Type', 'analytics-session'],
    maxAge: 86400,
  }),
  express.json(),
  analyticsRoutes,
);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

const main = async () => {
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`Servidor corriendo en http://localhost:${port}`);
};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
