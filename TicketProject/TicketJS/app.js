﻿/// <reference path="Ticket/OpenTicket.js" />
/// <reference path="Ticket/OpenTicket.js" />
var app = angular.module('Ticket', ['AxelSoft', 'oc.lazyLoad', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $urlRouterProvider.otherwise("/")
    $stateProvider.state('/eee', {
        url: "/sss",
        templateUrl: '/Ticket/AllTicket',
        controller: 'OpenTicketController',
       
    })
})