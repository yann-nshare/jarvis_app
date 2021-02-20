import { Server } from "http";
import Client from './entities/Client';
import { Query } from "typeorm/driver/Query";
import { create_client } from './models/client'
import Router from 'express'

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