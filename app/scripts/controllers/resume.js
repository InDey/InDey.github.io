'use strict';

/**
 * @ngdoc function
 * @name indeygithubioApp.controller:AboutCtrl
 * @description
 * # ResumeCtrl
 * Controller of the indeygithubioApp
 */
angular.module('indeygithubioApp')
.controller('ResumeCtrl', ['$scope', function ($scope) {
    $scope.pageClass = 'page-resume';
    $scope.title = 'Resume Page';
    $scope.education = {
        school: 'Pennsylvania State University',
        gpa: 2.78,
        date: new Date(2015, 12, 11),
        degree: 'bechelors degree in Computer Science'
    };
    $scope.work = [
        {
            company: 'Oracle Inc.',
            position: 'Software Development Engineering Intern',
            description: 'Developed java integration and selenium tests also worked with a team on business management software using agile development track',
            start: new Date(2014, 5),
            end: new Date(2014, 12)
        }
    ];
    $scope.projects = [
        {
            name: 'Graphics shader Ray Tracing',
            description: 'Developed 3D ray tracing code based on the Phong Lighting Model to mirror the OpenGL framework'
        },
        {
            name: 'Graphics Texture Synthesis',
            description: 'Constructed a patch matching algorithm using C++ with OpenCV framework based off the Efros and Freeman 2001 implementation'
        },
        {
            name: 'Mutli-threaded OS Process Scheduler',
            description: 'Programmed a multi-functional, multi-threaded operating system process controller with mutex-locks',
        },
        {
            name: 'Simulated Jumbotron Device Driver',
            description: 'Constructed software that communicated to a simulated monitor to relay information and update its display',
        },
        {
            name: 'Video Game Development',
            description: 'Created a third person zombie survival tower defense game using Unity3D engine with C# and JavaScript',
        },
        {
            name: 'Rocky Mountain Safes Gun Safe',
            description: 'Designed and developed fast unlocking safe prototype with android phone as the safe’s Interface using java and xml',
        },
        {
            name: 'Hackathons',
            description: 'Attended numerous hackathons to strengthen my abilities of programming with various design and development techniques',
        }
    ];
}]);
