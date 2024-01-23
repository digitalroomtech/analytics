import express from 'express';
import { getMetrics } from './metrics.actions';

const router = express.Router();

router.get('/list', getMetrics);

export default router;
