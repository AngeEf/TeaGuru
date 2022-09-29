import express from 'express';

import router from './indexRouter';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.sendStatus(200);
});

// // create mark
// router.post('/user/card', async (req,res) => {
//   await Card.create(req.body);
//   res.sendStatus(200);
// })
// // get all marks
// router.get('/cardlist', async (req,res) => {
//   const cards = await Card.findAll()
//   res.json(cards);
// })
export default apiRouter;
