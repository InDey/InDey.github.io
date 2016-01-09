'use strict';

/**
 * @ngdoc overview
 * @name indeygithubioApp
 * @description
 * # indeygithubioApp
 *
 * Main module of the application.
 */
angular.module('indeygithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
.config(function ($routeProvider) {
$routeProvider
    .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
    })
    .when('/resume', {
    templateUrl: 'views/resume.html',
    controller: 'ResumeCtrl',
    controllerAs: 'resume'
    })
    .when('/projects', {
    templateUrl: 'views/projects.html',
    controller: 'ProjectsCtrl',
    controllerAs: 'projects'
    })
    .otherwise({
    redirectTo: '/'
    });
});
