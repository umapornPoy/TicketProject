angular.module('TicketApp').controller('OpenTicketController', ['$scope', '$timeout', '$q', function ($scope, $timeout, $q) {
    $scope.fruits = ['apple', 'orange', 'mango', 'grapefruit', 'banana', 'melon'];
    $scope.setToMango = function () {
        $scope.fruit = 'mango';
    };
}])