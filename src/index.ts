import express from 'express';
import analyticsRoutes from './controllers/analytics/analytics.routes';
import tenantRoutes from './controllers/tenant/tenant.routes';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import { MONGODB_URI } from './utils/constants';
import cron from 'node-cron';
import metricsRoutes from './controllers/metrics/metrics.routes';
import { metricTask } from './jobs/task.actions';
import { MetricModels } from './controllers/metrics/metrics.types';

const app = express();
const httpServer = http.createServer(app);
const port = process.env.PORT || 3002;

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'analytics-session',
      'analytics-session-origin',
    ],
    maxAge: 86400,
  }),
  express.json(),
  analyticsRoutes,
);

app.use('/tenant', tenantRoutes);
app.use('/metric', metricsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

const main = async () => {
  await mongoose.connect(MONGODB_URI);
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`Servidor corriendo en http://localhost:${port}`);
};

// cron
//   .schedule(
//     '0 0 */1  * * *',
//     async () =>
//       await metricTask(MetricModels.socialNetworkMetrics, {
//         amount: 1,
//         unit: 'hour',
//       }),
//   )
//   .start();
// cron
//   .schedule('0 0 */1  * * *', async () =>
//     metricTask(MetricModels.pageMetrics, { amount: 1, unit: 'hour' }),
//   )
//   .start();
// cron
//   .schedule('0 0 */1  * * *', async () =>
//     metricTask(MetricModels.socialNetworkSessionMetrics, {
//       amount: 1,
//       unit: 'hour',
//     }),
//   )
//   .start();

main();
