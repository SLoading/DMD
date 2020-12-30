const express = require('express');
const Numbers = require('../models/Numbers');
const router = express.Router();

router.get('/api/numbers', async (req,res) =>{
    try{
         Numbers.find({},function (err,data) {
            res.json(data);

         });
    }catch (e){
        res.status(500).json({message:'error'})
    }
})

router.post('/api/delete_numbers', async (req,res) =>{
    try{
        await Numbers.deleteOne({"_id":req.body.id})
        res.status(201).json({message:'Numbers'})

    }catch (e){
        res.status(500).json({message:'error'})

    }
})
router.post('/api/append_number', async (req,res) =>{
    try{
        await Numbers.create({
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


router.put('/api/update_number', async (req,res) =>{
    try{
        await Numbers.findOneAndUpdate({"_id":req.body.id},{
            price: req.body.price,
            count_bed:req.body.count_bed,
            space:req.body.space,
            food:req.body.food,
            other:req.body.other,})
        res.status(201).json({message:'Number update'})

    }catch (e){
        res.status(500).json({message:'error'})
    }
})



module.exports = router;


