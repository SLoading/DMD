const express = require('express');
const Numbers = require('../models/Numbers');
const mongoose = ('mongoose');
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



module.exports = router;


