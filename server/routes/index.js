const express = require('express');
const router = express.Router();
const sentimentController = require('../controller/sentimentController');
const ratingsRender = require('../controller/ratingResultsController');

router.get('/',(req,res)=>{
    res.send("Hello From UniStart");
});


router.post('/analyse',sentimentController.sentimentAnalyse);
router.post('/analyse-entity',sentimentController.sentimentEntityAnalysis);
router.post('/college-data',ratingsRender.ratingRender);

module.exports = router;