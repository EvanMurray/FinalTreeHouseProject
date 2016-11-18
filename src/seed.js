'use strict';

var Recipe = require('./models/recipe.js');

var recipes = [
  'Omelet',
  'Pizza',
  'Burger'
];

recipes.forEach(function(recipe, index){
  Recipe.find({'name': recipe}, function(err, recipes){
    if(!err && !recipes.length) {
      Recipe.create({name: recipe, ingredients: ['#1', '#2', '#3'], instructions: 'sample description'});
    };
  });
});
