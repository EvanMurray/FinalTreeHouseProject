'use strict';

var mongoose = require('mongoose');

var recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: Array,
  instructions: String
});

var model = mongoose.model("Recipe", recipeSchema);

module.exports = model;
