import { Server } from "http";
import app from './server';

app.post('/register/pro', (req, res) => {
    //Create user
  });
  
app.post('/register/client', (req, res) => {
    //Create user
});
  
app.post('/login/pro', (req, res) => {
    //Connect user
});
  
app.post('/login/client', (req, res) => {
    //Connect user
});

app.get('/pro', (req, res) => {
    //Get pro list
});

app.get('client', (req, res) => {
    //Get client list
});
