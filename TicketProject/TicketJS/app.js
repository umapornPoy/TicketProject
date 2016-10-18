var app = angular.module('Ticket', ['ngRoute', 'AxelSoft', 'ui.router']);

app.config(function ($stateProvider) {
        .when("/", {
            templateUrl: "Home/Home"
        })
          .when("/AllTicket", {
              templateUrl: "Ticket/AllTicket"
          })
         .when("/OpenTicket", {
             templateUrl: "Ticket/OpenTicket"
         })
        .otherwise({
            templateUrl: "/"
        })
});