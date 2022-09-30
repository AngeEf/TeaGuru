import express from 'express';
import { Card } from '../../db/models'
import router from './indexRouter';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.sendStatus(200);
});

// create mark
apiRouter.post('/create', async (req,res) => {
  await Card.create(req.body);
  res.sendStatus(200)
})
// get all marks
apiRouter.get('/cardlist', async (req,res) => {
  const cards = await Card.findAll()
  res.json(cards);
})
export default apiRouter;
