'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipe', function(err){
  if(err){
    console.log('Failed to connect to Mongo');
  }else {
    console.log("Successfully connected to Mongo!");
  }

});
