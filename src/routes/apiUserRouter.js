import express from 'express';
import bcrypt from 'bcrypt';

import { User, Card, Comment } from '../../db/models';
// import { deleteProtect } from '../middlewares';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.route('/auth/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

router.route('/auth/registration')
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    if (name && password && email) {
      try {
        const user = await User.create({
          ...req.body, password: await bcrypt.hash(password, 10),
        });
        const currUser = { id: user.id, name: user.name };
        req.session.user = currUser;
        return res.json(currUser);
      } catch {
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(401);
    }
  });

router.route('/auth/authorization')
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && await bcrypt.compare(password, user.password)) {
        const currUser = { id: user.id, name: user.name };
        req.session.user = currUser;
        return res.json(currUser);
      }
      return res.sendStatus(401);
    }
    return res.sendStatus(401);
  });

router.get('/cardlist', async (req, res) => {
  const items = await Card.findAll();
  res.json(items);
});

router.get('/cardpage/:id', async (req, res) => {
  const oneCard = await Card.findOne({ where: { id: req.params.id } });
  res.json(oneCard);
});
// create mark
router.post('/create', async (req, res) => {
  const data = await Card.create(req.body);
  res.json(data);
});

export default router;
