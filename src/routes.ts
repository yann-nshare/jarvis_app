import { Server } from "http";
import Client from './entities/Client';
import { Query } from "typeorm/driver/Query";
import app from './server';
import { create_client } from './models/client'
import Router from 'express'

const route = Router();

app.get('/', (req, res) => {
    console.log("Page home");
});

app.post('/register/pro', (req, res) => {
    console.log("l");
    const {username, password} = req.body
    const promise = new Promise((resolve, reject) => {
        resolve(create_client(username, password))}).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error(err);
        });
    /*const promise = create_client(username, password).then((res) => {
        console.log(res);
    })*/
    //Create user
});
/*
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
});*/

export default route;