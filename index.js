const express = require('express');
const mongoose = require('mongoose');
const dbconnect = require('./DB/dbconnect');
const { createServer } = require('http');
const Numbers = require('./models/Numbers')
// const main = require('./main');
const app = express();
const port = 5000;

dbconnect.mongoose();

app.use(express.json({ extended:true }))

app.use('/',require('./routes/hotel.addNumber'));
app.use('/',require('./routes/hotel.numbers'));
app.use('/',require('./routes/hotel.deleteNumber'));


const server = createServer(app);

server.listen(port,() => console.log(`server is up. port ${port}`));