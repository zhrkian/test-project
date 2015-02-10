'use strict';

/**
 * @ngdoc function
 * @name testWiredepApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testWiredepApp
 */
angular.module('testWiredepApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
