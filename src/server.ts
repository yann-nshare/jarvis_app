import {get} from 'env-var';
import Stripe from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';
import route from './routes'
import DB from './appdata';
import { env } from './const_env';

// my env is at the root of jarvis_app -> ".env"
require('dotenv').config({ path: __dirname+'/.env' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const app = express();

// Use JSON parser for all routes
app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    if (req.originalUrl === '/') {
      next();
    } else {
      bodyParser.json()(req, res, next);
    }
  }
);

app.use(
  app
)
/*
app.use(
  route
)*/

app.listen(env('PORT').asPortNumber, async() => {
  await DB()
  console.log('listening on port 8080!');
});

export default app