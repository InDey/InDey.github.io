'use strict';

/**
 * @ngdoc function
 * @name indeygithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the indeygithubioApp
 */
angular.module('indeygithubioApp')
.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.pageClass = 'page-home';
    $scope.title = 'Homepage';
    $scope.picture = 'images/fancyJack.jpg';
    $scope.description = 'Hi! My name is Jack and I am a recent graduate from Pennsylvania State University with a bachelors in Computer Science.';
}]);

