'use strict';

/**
 * @ngdoc function
 * @name testWiredepApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the testWiredepApp
 */
angular.module('testWiredepApp')
  .controller('ContactCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope._url = 'http://zhrkian.github.io/test-project/#/about';

    window.iframeLoadedCallBack = function(event){
      console.log(event);
    };
  })
  .filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };
  }])

  .directive('iframeOnload', [function(){
    return {
      scope: {
        callBack: '&iframeOnload'
      },
      link: function(scope, element, attrs){
        element.on('load', function(){
          return scope.callBack();
        })
      }
    }}]);
