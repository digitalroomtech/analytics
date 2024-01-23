import express from 'express';
import { tenantCreate } from './tenant.actions';

const router = express.Router();

router.post(
  '/create',

  tenantCreate,
);

export default router;
