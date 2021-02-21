import Stripe from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';
import DB from './appdata';
import { create_client, yes_abo, no_abo, get_client } from './models/client';
import { create_pro, get_pro } from './models/professional';

// my env is at the root of jarvis_app -> ".env"
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const app = express()
// JSON parser
app.use(
  bodyParser.json(page_nav())
)

//Start connection
app.listen(8080, async() => {
  var db = await DB()
  console.log('listening on port 8080!');
});

app.post('/', async (req, res) => {
  res.send()
});

//Register for client
app.post('/register/client', async (req, res) => {
  try {
    const{username, password, email} = req.body
    console.log(username, password, email)
    //Create client
    await create_client(username, password, email);
    console.log(req.body)
    res.send("client Registered")
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
});

//Register for pro
app.post('/register/pro', async (req, res) => {
  try {
    const{username, password, email, service} = req.body
    console.log(username, password, email, service)
    //Create pro
    await create_pro(username, password, email, service)
    console.log(req.body)
    res.send("pro Registered")
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
});

app.post('/buy/abo', async (req, res) => {
  try {
    const{username} = req.body
    yes_abo(username);
    res.send("abo buyed")
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
});

app.post('/unbuy/abo', async (req, res) => {
  try {
    const{username} = req.body
    no_abo(username);
    res.send("abo unbuyed")
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
});

app.get('/login/client', async (req, res) => {
  try {
    // Need a header named username
    const username = req.header("username");
    // Read client associated to this username
    const client_data = await get_client(username);
    console.log(client_data);
    res.send(client_data)
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
})

app.get('/login/pro', async (req, res) => {
  try {
    // Need a header named username
    const username = req.header("username");
    // Read client associated to this username
    const client_data = await get_pro(username);
    console.log(client_data);
    res.send(client_data)
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
})

app.get('/chekout', async (req, res) => {
  try {
    res.send()
    res.status(200)
  } catch (error) {
    res.send(error)
    res.status(500)
  }
})
//export default app