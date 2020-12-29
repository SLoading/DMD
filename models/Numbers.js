const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        price : {type: Number, required:true},
        count_bed: {type: Number, required:true},
        space: {type: Number, required:true},
        food: {type: String, required:true},
        other: {type: mongoose.Schema.Types.Mixed, required:true}


})

module.exports = mongoose.model('numbers',schema)