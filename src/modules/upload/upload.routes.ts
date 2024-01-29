import express from 'express';
import { uploadFile } from './upload.actions';

const uploadRoutes = express.Router();

uploadRoutes.post(
  '/',
  uploadFile,
);
export default uploadRoutes;