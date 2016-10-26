/// <reference path="Ticket/OpenTicket.js" />
/// <reference path="Ticket/OpenTicket.js" />
var app = angular.module('TicketApp', ['ui.router', 'oc.lazyLoad', 'dx', 'summernote', 'AxelSoft','flow']);
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
        }).state('ReplyTicket/:id', {
            url: "/ReplyTicket/:id",
            templateUrl: 'Ticket/ReplyTicket',
            controller: 'ReplyTicketController',
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
            {
                name: 'AceApp',
                files: ['TicketJS/Ticket/ReplyTicket.js']
            }, ])
                }]
            }
      
        }).state('MyTicket', {
            url: "/MyTicket",
            templateUrl: 'Ticket/MyTicket',
            controller: 'MyTicketController',
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
            {
                name: 'AceApp',
                files: ['TicketJS/Ticket/MyTicket.js']
            }, ])
                }]
            }
        }).state('NotAssign', {
            url: "/NotAssign",
            templateUrl: 'Ticket/NotAssign',
            controller: 'NotAssignController',
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
            {
                name: 'AceApp',
                files: ['TicketJS/Ticket/NotAssign.js']
            }, ])
                }]
            }
        }).state('Search', {
            url: "/Search",
            templateUrl: 'Ticket/Search',
            //controller: 'NotAssignController',
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
            {
                //name: 'AceApp',
                //files: ['TicketJS/Ticket/NotAssign.js']
            }, ])
                }]
            }

        }).state('Profile', {
            url: "/Profile",
            templateUrl: 'Home/Profile',
            controller: 'ProfileController',
            resolve: {
                lazyLoad: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
            {
                name: 'AceApp',
                files: ['TicketJS/Home/Profile.js']
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
