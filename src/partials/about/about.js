'use strict';

angular.module('app.about', [])

.controller('AboutCtrl', ['$scope', function($scope) {

  $scope.institutions = [
    {
      'name': 'Princeton University',
      'degree': 'Master of Architecture',
      'years': '2012 - 2015'
    },
    {
      'name': 'Yale University',
      'degree': 'Bachelor of Arts, Architecture',
      'years': '2006 - 2010'
    }
  ];

  $scope.jobs = [
    {
      'title': 'Figma',
      'position': 'Designer',
      'dates': 'September 2015 - present',
      'duties': 'Brand, communication, and visual design.',
    },
    {
      'title': '2x4',
      'position': 'Freelance Designer',
      'dates': 'Summer 2013 and January 2015',
      'duties': 'Graphic, environmental, and exhibition design.',
    },
    {
      'title': 'Pentagram',
      'position': 'Intern Designer, Team Paula Scher',
      'dates': 'Summer 2014',
      'duties': 'Graphic and environmental design.',
    },
    {
      'title': 'Princeton School of Architecture',
      'position': 'Freelance Designer',
      'dates': 'May 2014 - present',
      'duties': 'Graphic and identity design.',
    },
    {
      'title': 'Ateliers Jean Nouvel',
      'position': 'Architectural Designer',
      'dates': '2011 - 2012',
      'duties': 'Digital and physical modeling and rendering.',
    },
  ];

  $scope.skills = [
    ['Print', 'Illustrator', 'InDesign', 'Photoshop'],
    ['Interface', 'Figma', 'Sketch'],
    ['Motion', 'After Effects', 'Premiere Pro', 'Photoshop'],
    ['Web-based', 'HTML', 'CSS'],
    ['3D', 'Rhinoceros', 'AutoCAD', 'V-Ray', 'Grasshopper', 'Cinema 4D'],
    ['Fabrication', 'Woodshop', 'Laser Cutter', '3D printer'],
  ];

}]);
