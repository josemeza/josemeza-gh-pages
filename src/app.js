'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'ngAnimate',
  'app.list',
  'app.about'
]).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "src/partials/home/home.html",
      controller: 'ListCtrl'
    })
    .state('images', {
      url: "/images",
      templateUrl: "src/partials/tiles/images.html",
      controller: 'ListCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "src/partials/about/about.html",
      controller: 'AboutCtrl'
    })
    .state('figma', {
      url: "/figma",
      templateUrl: "src/partials/projects/figma.html",
      controller: 'ListCtrl'
    })
    .state('princeton-mellon', {
      url: "/princeton-mellon",
      templateUrl: "src/partials/projects/princeton-mellon.html",
      controller: 'ListCtrl'
    })
    .state('moma', {
      url: "/moma",
      templateUrl: "src/partials/projects/moma.html",
      controller: 'ListCtrl'
    })
    .state('thesis', {
      url: "/thesis",
      templateUrl: "src/partials/projects/thesis.html",
      controller: 'ListCtrl'
    })
    .state('thesis-catalog', {
      url: "/thesis-catalog",
      templateUrl: "src/partials/projects/thesis-catalog.html",
      controller: 'ListCtrl'
    })
    .state('pentagram', {
      url: "/pentagram",
      templateUrl: "src/partials/projects/pentagram.html",
      controller: 'ListCtrl'
    })
    .state('psoa', {
      url: "/psoa",
      templateUrl: "src/partials/projects/psoa.html",
      controller: 'ListCtrl'
    })
    .state('pidgin', {
      url: "/pidgin",
      templateUrl: "src/partials/projects/pidgin.html",
      controller: 'ListCtrl'
    })
    .state('2x4', {
      url: "/2x4",
      templateUrl: "src/partials/projects/2x4.html",
      controller: 'ListCtrl'
    })
    .state('architecture', {
      url: "/architecture",
      templateUrl: "src/partials/projects/architecture.html",
      controller: 'ListCtrl'
    });
}]);
