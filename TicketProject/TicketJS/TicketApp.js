/// <reference path="Ticket/OpenTicket.js" />
/// <reference path="Ticket/OpenTicket.js" />
var app = angular.module('TicketApp', ['ui.router', 'oc.lazyLoad', 'dx', 'summernote', 'AxelSoft']);
app.config(function ($urlRouterProvider, $stateProvider, $ocLazyLoadProvider) {

        $urlRouterProvider.otherwise("/")
        $stateProvider.state('/Home', {
                url: "/",
                templateUrl: 'Home/Home'

        }).state('OpenTicket', {
                url: "/OpenTicket",
                templateUrl: 'Ticket/OpenTicket',
                controller: 'OpenTicketController',
                resolve: {
                    lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                {
                    name: 'AceApp',
                    files: ['TicketJS/Ticket/OpenTicket.js']
                }, ])
                    }]
                }
        }).state('AllTicket', {
                url: "/AllTicket",
                templateUrl: 'Ticket/AllTicket',
                controller: 'AllTicketController',
                resolve: {
                    lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                {
                    name: 'AceApp',
                    files: ['TicketJS/Ticket/AllTicket.js']
                }, ])
                    }]
                }
        }).state('Login', {
            url: "/Login/Login",
            templateUrl: 'Login/Login',
            controller: 'LoginController',
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
            {
                name: 'AceApp',
                files: ['TicketJS/Login/Login.js']
            }, ])
                }]
            }
        })


    //$routeProvider
    //    .when("/", {
    //        templateUrl: "Home/Home"
    //    })
    //     .when("/OpenTicket", {
    //         templateUrl: "Ticket/OpenTicket",
    //     })
    //     .when("/MyTicket", {
    //         templateUrl: "Ticket/MyTicket",
    //     })
    //    .when("/TicketNotAssign", {
    //        templateUrl: "Ticket/TicketNotAssign",
    //    })
    //    .when("/AllTicket", {
    //        templateUrl: "Ticket/AllTicket",
    //    })
    //    .otherwise({
    //        templateUrl: "/"
    //    })
});
