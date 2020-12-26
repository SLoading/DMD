const mongoose = require('mongoose');


exports.mongoose = function (){mongoose.connect('mongodb+srv://admin:admin@cluster0.hjxre.mongodb.net/hotel?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('MongoDB connected'))
    .catch((err)=> console.log('err'));}

