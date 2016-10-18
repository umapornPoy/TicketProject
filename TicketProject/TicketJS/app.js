var app = angular.module('Ticket', ['ngRoute', 'ui.bootstrap']);
app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Home/Index"
        })
         
        .otherwise({
            templateUrl: "/"
        })
});