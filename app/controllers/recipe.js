'use strict';

var angular = require('angular');

angular.module('RecipeWebsite')
.controller('recipeCtrl', function($scope, $timeout, dataService){

  $scope.deleteRecipe = function(recipe, index) {
     $scope.recipes.splice(index, 1);
     dataService.deleteRecipe(recipe);
   };

  $scope.saveRecipes = function(){
    var recipes = $scope.recipes;
    dataService.saveRecipes(recipes);
  }
  $scope.addRecipe = function() {
    var recipe = $scope.recipe;
    $scope.recipes.unshift(recipe);
}

    $scope.combineSaveAndAdd = function(){
      $scope.addRecipe();
      $timeout(function () {
        $scope.saveRecipes();
      }, 10);
    }
});
