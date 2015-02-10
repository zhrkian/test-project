'use strict';

/**
 * @ngdoc function
 * @name testWiredepApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testWiredepApp
 */
angular.module('testWiredepApp')
  .controller('AboutCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $timeout(function(){
      $scope._url = 'http://localhost:9000/#/';
    }, 2000);
  });
