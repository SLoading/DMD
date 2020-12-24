const express = require('express');
const mongoose = require('mongoose');
const { createServer } = require('http');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://admin:admin@cluster0.hjxre.mongodb.net/hotel?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
    })
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=> console.log('err'));

const server = createServer(app);

server.listen(port,() => console.log(`server is up. port ${port}`));