'use strict';

/**
 * @ngdoc function
 * @name testWiredepApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testWiredepApp
 */
angular.module('testWiredepApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
