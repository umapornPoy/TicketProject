var app = angular.module('Ticket', ['ngRoute', 'datatables']);
app.config(function ($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl: "Home/Index"
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