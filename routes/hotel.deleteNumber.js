const express = require('express');
const Numbers = require('../models/Numbers');
const mongoose = ('mongoose');
const router = express.Router();

router.post('/api/delete_numbers', async (req,res) =>{
    try{
       await Numbers.deleteOne({"_id":req.body.id})
    }catch (e){
        res.status(500).json({message:'error'})
        console.log("erre")

    }
})



module.exports = router;


