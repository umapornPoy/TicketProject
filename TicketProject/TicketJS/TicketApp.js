var app = angular.module('TicketApp', ['ngRoute', 'dx', 'summernote', 'AxelSoft']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/Home"
        })
         .when("/OpenTicket", {
             templateUrl: "Ticket/OpenTicket",
         })
         .when("/MyTicket", {
             templateUrl: "Ticket/MyTicket",
         })
        .when("/TicketNotAssign", {
            templateUrl: "Ticket/TicketNotAssign",
        })
        .when("/AllTicket", {
            templateUrl: "Ticket/AllTicket",
        })
        .otherwise({
            templateUrl: "/"
        })
});
