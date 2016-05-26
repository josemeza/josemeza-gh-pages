'use strict';

angular.module('app.list', [])

.controller('ListCtrl', ['$rootScope', '$scope', '$location', '$state', function(
    $rootScope, $scope, $location, $state) {

  // Update current project case on state change
  $rootScope.$on('$stateChangeSuccess', function(event, toState){
    var name = toState.name;
    if (name === 'list' || name === 'images' || name === 'about') {
      $rootScope.currentCase = '';
    } else {
      $rootScope.currentCase = name;
    }
  });

  $scope.projects = {
    'figma': {
      'header': 'Figma',
      'year': '2016',
      'title': 'Visual Identity',
      'organization': 'Figma',
      'description': ['Figma is the collaborative interface design tool.','A sampling of marketing and visual design collateral for Figma\'s preview release that helped establish the company\'s emerging identity. The scope of the work includes product onboarding, a marketing website, email campaigns, and social media imagery.'],
      'img': 'dist/assets/compressed/Figma/pixel scale 2.png',
      'width': 'img-1-2 off-1-8',
      'url': 'figma'
    },
    'princeton-mellon': {
      'header': 'Princeton-Mellon Initiative',
      'year': '2016',
      'title': 'Printed Matter',
      'organization': 'Princeton Mellon Initiative',
      'description': ['The Princeton-Mellon Initiative works with a wide range of departments, programs and schools across the Princeton campus to develop a more dynamic and nuanced understanding of urban issues today. The Initiative asked me to complete a series of posters for their lineup of lectures and conferences for the Spring 2016 semester.', ''],
      'img': 'dist/assets/compressed/Princeton Mellon/PM7.png',
      'width': 'img-1-4',
      'url': 'princeton-mellon'
     },
    'moma': {
      'header': 'MoMA-Princeton',
      'year': '2015',
      'title': 'Printed Matter',
      'organization': 'MoMA-Princeton',
      'description': ['Print materials for a symposium event accompanying the MoMA exhibition: Latin America in Construction: Architecture 1955–1980.', ''],
      'img': 'dist/assets/compressed/LAA/LAA0.jpg',
      'width': 'img-1-3',
      'url': 'moma'
    },
    'thesis': {
      'header': 'Princeton Master\'s Thesis',
      'year': '2015',
      'title': 'Environment & Activation',
      'organization': 'Princeton Master\'s Thesis',
      'description': ['The semester-long thesis project consisted of a site-specific occupation and mediated experience of a suburban house with an assortment of physical surface treatments, photographs, text and audio soundtrack.', 'Thesis Advisor: Michael Meredith'],
      'img': 'dist/assets/compressed/Thesis/fireplace.png',
      'width': 'img-1-2',
      'url': 'thesis'
    },
    'thesis-catalog': {
      'header': 'Princeton Master\'s Thesis Catalog',
      'year': '2015',
      'title': 'Printed Matter & Process',
      'organization': 'Princeton Master\'s Thesis Catalog',
      'description': ['A printed catalog of design experiments and prototypes in photography, physical modeling, digital rendering, and drawing formats leading up to the final thesis project.', ''],
      'img': 'dist/assets/compressed/Collages/tile.jpg',
      'width': 'img-1-2 off-1-8',
      'url': 'thesis-catalog'
    },
    'pentagram': {
      'header': 'Pentagram',
      'year': '2015',
      'title': 'Environment',
      'organization': 'Pentagram',
      'description': ['Environmental design for these clients while employed at Pentagram as an intern designer, New York under the direction of Paula Scher.', ''],
      'img': 'dist/assets/compressed/Pentagram/pentagram.jpg',
      'width': 'img-1-4',
      'url': 'pentagram'
    },
    'psoa': {
      'header': 'Princeton School of Architecture',
      'year': '2015',
      'title': 'Visual Identity',
      'organization': 'Princeton School of Architecture',
      'description': ['Rebranding strategy and visual identity package for the graduate architecture program.', ''],
      'img': 'dist/assets/compressed/PSOA/psoa.gif',
      'width': 'img-1-2',
      'url': 'psoa'
    },
    'pidgin': {
      'header': 'Pidgin Magazine',
      'year': '2014',
      'title': 'Visual Identity & Printed Matter',
      'organization': 'Pidgin Magazine',
      'description': ['Redesign of the bi-annual student publication of the Princeton School of Architecture.', ''],
      'img': 'dist/assets/compressed/Pidgin/Pidgin IC.png',
      'width': 'img-1-3 off-1-8',
      'url': 'pidgin'
    },
    '2x4': {
      'header': '2x4',
      'year': '2014',
      'title': 'Environment',
      'organization': '2x4',
      'description': ['Signage, exhibition and architectural design for these clients while employed at 2x4, New York.',''],
      'img': 'dist/assets/compressed/2x4/2x4_logo.jpg',
      'width': 'img-1-3 off-1-8',
      'url': '2x4'
    },
    'architecture': {
      'header': 'Master of Architecture Program',
      'year': '2012-5',
      'title': 'Architecture',
      'organization': 'Master of Architecture Program',
      'description': ['A selection of work created in the graduate architecture program at Princeton.', ''],
      'img': 'dist/assets/compressed/Architecture/cholo 2.png',
      'width': 'img-1-3',
      'url': 'architecture'
    },
    'figma-process': {
      'header': 'Figma—Process',
      'year': '',
      'title': '',
      'organization': '',
      'description': ['', ''],
      'img': '',
      'width': '',
      'url': 'figma-process'
    },
  };

  $scope.isActive = function(path) {
    return ($location.path().substr(0, path.length) === path);
  };

  $scope.goToPrevious = function() {
    var states = $state.get().splice(4);
    var current = $state.$current.name;
    var currentInd = states.indexOf(current);
    var previous = '';

    for (var i = 0; i < states.length; i++) {
      if (states[i].name === current) {
        if (i === 0) {
          previous = states[states.length-1].name;
        } else {
          previous = states[i-1].name;
        }
      }
    }

    $state.go(previous);
  };

  $scope.goToNext = function() {
    var states = $state.get().splice(4);
    var current = $state.$current.name;
    var currentInd = states.indexOf(current);
    var next = '';

    for (var i = 0; i < states.length; i++) {
      if (states[i].name === current) {
        if (i === states.length - 1) {
          next = states[0].name;
        } else {
          next = states[i+1].name;
        }
      }
    }

    $state.go(next);
  };

}]);
