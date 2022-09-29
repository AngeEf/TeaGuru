import express from 'express';
import path from 'path';
import morgan from 'morgan';
// import apiRouter from './routes/apiRouter';
import indexRouter from './routes/indexRouter';
import customRender from './utils/customRender';
import userRouter from './routes/userRouter';
import apiUserRouter from './routes/apiUserRouter';
import { localsMiddle } from './middlewares';

const session = require('express-session');
const FileStore = require('session-file-store')(session);

require('dotenv').config();

const PORT = process.env.PORT ?? 3005;

const app = express();

app.use(morgan('dev'));

app.engine('jsx', customRender);
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  name: 'sid',
  store: new FileStore(),
  secret: 'fdgfasfhbjnk',
  saveUninitialized: false,
  resave: true,
}));

app.use(localsMiddle);

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/api', apiUserRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
