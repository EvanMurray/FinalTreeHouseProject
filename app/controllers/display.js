'use strict';

var angular = require('angular');

angular.module('RecipeWebsite')
.controller('displayCtrl', function($scope, dataService){

  dataService.getRecipes(function(response){
    var recipes = response.data.recipes;
    $scope.recipes = recipes;

  });




});
