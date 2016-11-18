'use strict';

angular.module('RecipeWebsite')
.directive('recipe', function(){
  return {
    templateUrl: 'templates/submit.html',
    replace: true,
    controller: 'recipeCtrl'
  }
})
