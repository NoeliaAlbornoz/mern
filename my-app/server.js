'use strict'

const mongoose = require('mongoose');
const app = require('./app')
const port = process.env.PORT || 5000;

  mongoose.connect("mongodb+srv://nga:123@cluster1-9xrei.mongodb.net/test?retryWrites=true&w=majority"
  ).then(res =>{
    console.log("CONNECTED TO THE DATABASE");

    app.listen(port, () => {
      console.log(`EXPRESS RUNNING IN PORT ${port}`)
    });

  }).catch(err => {"ERROR CONNECTING TO DATABASE"});

  

 



