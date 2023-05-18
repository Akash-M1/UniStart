const express = require('express');
const router = express.Router();
const sentimentController = require('../controller/sentimentController');


router.get('/',(req,res)=>{
    res.send("Hello From UniStart");
});


router.post('/analyse',sentimentController.sentimentAnalyse);
router.post('/analyse-entity',sentimentController.sentimentEntityAnalysis);

module.exports = router;