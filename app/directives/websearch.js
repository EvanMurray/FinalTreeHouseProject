'use strict';

angular.module('RecipeWebsite')
.directive('websearch', function(){
  return {
    templateUrl: 'templates/webSearch.html',
    replace: true,
    controller: 'webSearchCtrl'
  }
})
