import express from 'express';
import { authenticate, analyticsCreate } from './analyticsController';

const router = express.Router();

router.get('/authenticate', authenticate);

router.post('/create', async (req, res) => {
  await analyticsCreate(req, res);
});

export default router;
