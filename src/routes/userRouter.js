import express from 'express';
import { Card } from '../../db/models';

const router = express.Router();

router.get('/registration', (req, res) => {
  res.render('Layout', { });
});

router.get('/cardpage/:id', async (req, res) => {
  const oneCard = await Card.findOne({ where: { id: req.params.id } });
  res.render('Layout', { oneCard });
});

export default router;
