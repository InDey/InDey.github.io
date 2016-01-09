'use strict';

/**
 * @ngdoc function
 * @name indeygithubioApp.controller:MainCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the indeygithubioApp
 */
angular.module('indeygithubioApp')
.controller('ProjectsCtrl', ['$scope', function($scope) {
    $scope.pageClass = 'page-projects';
    $scope.title = 'Projects';
    $scope.projects = [
        {
            name: 'this is a name of my project'
        }
    ];
}]);