'use strict';

var app = angular.module('app', []);

app.controller('main', function ($scope) {
   $scope.modal = false;
   $scope.click = function () {
      return $scope.modal = true;
   };
});

app.directive('modal', function () {
   return {
      restrict: 'E',
      replace: true,
      scope: {
         message: '=',
         show: '='
      },
      controller: function controller($scope) {
         $scope.hide = function () {
            return $scope.show = false;
         };
      },
      transclude: true,
      template: '<div ng-click="hide()" class="modal">\n         <div class="modal-wrapper">\n            <h1>{{message}}</h1>\n            <ng-transclude></ng-transclude>\n         </div>\n      </div>'
   };
});