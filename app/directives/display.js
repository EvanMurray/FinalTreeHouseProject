'use strict';

angular.module('RecipeWebsite')
.directive('display', function(){
  return {
    templateUrl: 'templates/display.html',
    replace: true,
    controller: 'displayCtrl'
  }
})
