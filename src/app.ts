
import Stripe from 'stripe';
import * as express from 'express';
import bodyParser from 'body-parser';

// my env is at the root of jarvis_app -> ".env"
require('dotenv').config({ path: __dirname+'/.env' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const app = express();

// Use JSON parser for all non-webhook routes
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

app.post(
  '/',
);

app.listen(8080, (): void => {
  console.log('listening on port 8080!');
});