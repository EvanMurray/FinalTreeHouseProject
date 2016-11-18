'use strict';

var angular = require('angular');

angular.module('RecipeWebsite', []);

require('./controllers/main.js');
require('./controllers/recipe.js');
require('./controllers/webSearch.js');
require('./controllers/display.js');
require('./directives/webSearch.js');
require('./directives/recipe.js');
require('./directives/display.js');
require('./services/data.js');
require('./navbar.js');
