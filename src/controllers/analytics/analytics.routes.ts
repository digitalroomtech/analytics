import express from 'express';
import { authenticate, createEvent } from './analyticsController';

const router = express.Router();

router.get('/authenticate', authenticate);

router.post('/createEvent', async (req, res) => {
  await createEvent(req, res);
});

export default router;
