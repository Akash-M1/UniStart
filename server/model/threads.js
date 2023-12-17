const mongoose = require('mongoose');


const threadsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contents:[
        {
            quora_link:{
                type:String,
                required:true
            },
            content:{
                type:String,
                required:true
            }
        }
    ]
});


module.exports=mongoose.model('ThreadsSchema',threadsSchema,'threads');