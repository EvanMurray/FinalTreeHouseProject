'use strict';

var angular = require('angular');
var $ = require('jquery');
angular.module('RecipeWebsite')
.controller('webSearchCtrl', function($scope, dataService){


  var recipeAPI = "http://www.recipepuppy.com/api/";
  var recipeOptions = {
      q: undefined,
      i: undefined,
      p: 1
      };
  //load in web search results
  $('body').on('click', '#submit-search', function(event){
      event.preventDefault();

      var input = $('#search').val();
      if(input.includes(',')){
         recipeOptions.i = input;
      }else{
          recipeOptions.q = input;
      }


  //ajax for websearch
  recipeAjax(recipeAPI, recipeOptions);

  });

  function success(data){
      console.log(data);
      var htmlString = "";

      $.each(data.results, function(i, recipe){
          htmlString += '<li>';
          htmlString += '<a href="'+recipe.href+'" target="_blank">';
          if(recipe.thumbnail === ""){
              htmlString += '<img class = "recipeImage" src="images/imagePlaceholder.png">';
          }else{
          htmlString += '<img class = "recipeImage" src="'+recipe.thumbnail+'">';
          }
          htmlString += '</a>';
          htmlString += ' '+recipe.title+'';
          htmlString += '</li>';
      });
      $('#recipe-list').html(htmlString);
      $("#previousRecipe").show();
      $("#nextRecipe").show();
  }
  $('body').on('click', '#nextRecipe', function(){
      recipeOptions.p += 1;
      recipeAjax(recipeAPI, recipeOptions);


  });
  $('body').on('click', '#previousRecipe', function(){
      if(recipeOptions.p > 1){
          recipeOptions.p -= 1;
          recipeAjax(recipeAPI, recipeOptions);
  }

  });

  function recipeAjax(recipeAPI, recipeOptions){
      $.ajax({
      method: 'POST',
      dataType: 'jsonp',
      url: recipeAPI,
      jsonpCallback: 'jQuery',
      data: recipeOptions,
      success: success
      });
  }

});
