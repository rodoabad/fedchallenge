var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    
    $routeProvider
        .when('/', {
            controller : 'membersController',
            templateUrl : 'tpl/home.html'
    
        }).when('/members/:memberId', {
            controller : 'profileController',
            templateUrl : 'tpl/profile.html'
        }).otherwise({
            redirectTo : '/'
        });
});


