const express = require('express');
const mongoose = require('./configs/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/',require('./routes'));


app.listen(PORT,(err)=>{
    if(err){
        console.log("Error in listening");
        return;
    }
    console.log("Listening on the Port",PORT);
})