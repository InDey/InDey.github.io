'use strict';

/**
 * @ngdoc function
 * @name indeygithubioApp.controller:HeadCtrl
 * @description
 * # HeadCtrl
 * Controller of the indeygithubioApp
 */
angular.module('indeygithubioApp')
.controller('HeadCtrl', ['$scope', function ($scope) {
    $scope.tabs = [ 
        {
        name: 'Projects',
        url: '#/projects'
        },
         {
        name: 'Resume',
        url: '#/resume'
        }
    ];
    $scope.tab = 1;

    $scope.setTab = function (tabId) {
        $scope.tab = tabId;
    };

    $scope.isSet = function (tabId) {
        return $scope.tab === tabId;
    };
}])
.directive('myHeader', function(){
    return {
        restrict: 'E',
        scope: {
            tabName: '=name',
            tabUrl: '=tUrl'
        },
        templateUrl: 'myHeader.html'
    };
});
