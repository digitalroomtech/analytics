import express from 'express';
import { authenticate, createEvent } from './analyticsController';

const app = express();
const port = 3002;

app.use(express.json());

app.get('/authenticate', authenticate);

app.post('/createEvent', async (req, res) => {
  const { name, uuid } = req.body;
  await createEvent(req, res);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
