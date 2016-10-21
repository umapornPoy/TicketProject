angular.module('TicketApp').controller('ReplyTicketController', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {

    $http.get("http://localhost:55795/api/TicketApi/ticketInfo").success(function (data) {
        $scope.TicketInfo = data;
        console.log($scope.TicketInfo);  

        

    });

}]);