import {get} from 'env-var';
import Stripe from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';
import DB from './appdata';
import { env } from './const_env';
import create_client from 'models/client';

// my env is at the root of jarvis_app -> ".env"
require('dotenv').config({ path: __dirname+'/.env' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export const app = express()
// JSON parser
app.use(
  bodyParser.json()
)

//Start connection
app.listen(8080, async() => {
  await DB()
  console.log('listening on port 8080!');
});

//Register for client
app.post('/register/client', async (req, res) => {
  const{username, password, email} = req.body
  console.log(username, password, email)
  //Create client
  create_client()
  console.log(req.body)
  res.send("Registered");
});

//Register for pro
app.post('/register/pro', async (req, res) => {
  const{username, password, email, pp_url, service} = req.body
  console.log(username, password, email, pp_url, service)
  //Create pro
  console.log(req.body)
  res.send("good")
});

//export default app