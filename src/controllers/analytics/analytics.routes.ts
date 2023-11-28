import express from 'express';
import { authenticate, analyticsCreate } from './analytics-controller';
import { checkSessionMiddleware } from '../../middlewares/check-analytics-session.middleware';
import { limitRequests } from '../../middlewares/limit-requests.middleware';

const router = express.Router();

router.get('/authenticate', authenticate);

router.post('/create', checkSessionMiddleware, limitRequests, async (req, res) => {
  await analyticsCreate(req, res);
});

// Middleware para manejar rutas no encontradas
router.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

export default router;
