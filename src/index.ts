import express from 'express';
import analyticsRoutes from './modules/analytics/analytics.routes';
import tenantRoutes from './modules/tenant/tenant.routes';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import { MONGODB_URI } from './utils/constants';
import metricsRoutes from './modules/metrics/metrics.routes';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { expressMiddleware } from '@apollo/server/express4';
import { expressServer } from './config/express.server';
import { graphqlServer } from './config/graphql.server';
import { TASK_LISTS } from './modules/task/task.actions';
import { authenticateMiddleware } from './middlewares/authenticateMiddleware';
import uploadRoutes from './modules/upload/upload.routes';

const httpServer = http.createServer(expressServer);
const port = process.env.PORT || 3002;

expressServer.use(
  '/analytic',
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Authorization', 'Content-Type', 'analytics-session'],
    maxAge: 86400,
  }),
  express.json(),
  analyticsRoutes,
);
expressServer.use('/tenant', tenantRoutes);
expressServer.use('/metric', metricsRoutes);
expressServer.use(
  '/upload',
  cors<cors.CorsRequest>({
    origin: '*',
    methods: ['GET', 'POST'],
    maxAge: 86400,
  }),
  uploadRoutes,
);

const main = async () => {
  await mongoose.connect(MONGODB_URI);
  await graphqlServer.start();
  expressServer.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    graphqlUploadExpress(),
    expressMiddleware(graphqlServer, {
      context: async ({ req }) => ({
        userId: req && req.headers.authorization ? authenticateMiddleware(req) : null,
      }),
    }),
  );
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  // TASK_LISTS.map((cron) => cron.start());

  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  console.log(`🚀 Server ready at http://localhost:${port}`);
};

main();
