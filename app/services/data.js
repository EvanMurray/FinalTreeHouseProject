'use strict';

var angular = require('angular');

angular.module('RecipeWebsite')
.service('dataService', function($http, $q){

  this.getRecipes = function(cb){
    $http.get('/api/recipes').then(cb);
  };

  this.deleteRecipe = function(recipe) {
    if (!recipe._id) {
     return $q.resolve();
   }
   return $http.delete('/api/recipes/' + recipe._id).then(function() {
     console.log("I deleted the " + recipe.name + " recipes!");
   });
 };


  this.saveRecipes = function(recipes){

    var queue = [];
    recipes.forEach(function(recipe, index){
      var request;
      if(!recipe._id) {
        request = $http.post('/api/recipes', recipe);
      }else{
        request= $http.put('/api/recipes/' + recipe._id, recipe).then(function(result){
          recipe = result.data.recipe;
          console.log(recipe);
        });
      };
      queue.push(request);
    });
    return $q.all(queue).then(function(results){
      console.log("Successfully saved Recipe");
  });

};
});
