angular.module('TicketApp').controller('ReplyTicketController', ['$scope', '$http', '$stateParams', '$filter', function ($scope, $http, $stateParams, $filter) {

    $http.get("http://localhost:55795/api/TicketApi/ticketInfo").success(function (data) {
        $scope.TicketInfo = data;
        //console.log($scope.TicketInfo);  

        var FilterTicket = $filter('filter')($scope.TicketInfo, { TicketNumber: $stateParams.id });
        $scope.Ticket = FilterTicket[0];
        console.log($scope.Ticket);

    });

}]);