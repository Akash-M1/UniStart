const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8000;

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