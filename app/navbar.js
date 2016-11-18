'use strict';
var $ = require('jquery');

$('.templateList').children().hide();

function menuNavigation (button, page){
  $('body').on("click", button, function(){
      $(page).siblings().hide();
      $(page).show();
  });

};

menuNavigation("#submitLink", '#recipeCreator');
menuNavigation("#webSearchLink", '#webSearch');
menuNavigation("#searchLink", '#recipeSearch');


$('body').on("click", "#home", function(){
    $('.templateList').children().hide();
})
