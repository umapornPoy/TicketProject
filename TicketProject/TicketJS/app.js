var app = angular.module('Ticket', ['ngRoute', 'AxelSoft', 'ui.router']);

app.config(function ($stateProvider) {

    $stateProvider.state('/', {
        template: 'Home/Index',
        controller: "OpenTicketController"
    })
    .state('/OpenTicket', {
        template: 'Home/OpenTicket',
        controller: "OpenTicketController"
    })
});