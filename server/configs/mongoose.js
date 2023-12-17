const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akashm1:akash123@cluster0.10pelru.mongodb.net/unistart');

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Connection Successful to DB");
});

db.on('error',console.error.bind('console',"Error in connection"));

module.exports = db;