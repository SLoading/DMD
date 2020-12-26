const express = require('express');
const mongoose = require('mongoose');
const dbconnect = require('./DB/dbconnect');
const { createServer } = require('http');
const Numbers = require('./models/Numbers')
// const main = require('./main');
const app = express();
const port = 5000;

dbconnect.mongoose();
//
app.use(express.json({ extended:true }))
const hotel = require('./routes/hotel.routes');
app.use('/',hotel);

// const Num = mongoose.model('Numbers',Numbers)
// app.get('/', (req,res) =>{
//     Numbers.create({
//         number: 1,
//         price: 1000,
//         count_bed:1,
//         space:12,
//         food:"Без питания",
//         other:["светильник","Холодильник"],
//     })
//         .then((number) =>res.send(number))
//             .catch((err)=>res.send(err));
//
// });


const server = createServer(app);

server.listen(port,() => console.log(`server is up. port ${port}`));