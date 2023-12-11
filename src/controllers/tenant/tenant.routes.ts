import express from 'express';
import { tenantCreate } from './tenant.controller';

const router = express.Router();

router.post(
  '/create',

  tenantCreate,
);

export default router;
