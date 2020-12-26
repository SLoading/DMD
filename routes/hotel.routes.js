const express = require('express');
const Numbers = require('../models/Numbers');
const mongoose = ('mongoose');
const router = express.Router();

router.post('/api/append_number', async (req,res) =>{
    try{
        await Numbers.create({
                    number: req.body.number,
                    price: req.body.price,
                    count_bed:req.body.count_bed,
                    space:req.body.space,
                    food:req.body.food,
                    other:req.body.other,
                })
        res.status(201).json({message:'Number append'})
    }catch (e){
        res.status(500).json({message:'error'})
    }
})


module.exports = router;