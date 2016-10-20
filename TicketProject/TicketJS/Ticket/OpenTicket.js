angular.module('TicketApp').controller('OpenTicketController', ['$scope', '$timeout', '$q', function ($scope, $timeout, $q) {
    $scope.fruits = ['apple', 'orange', 'mango', 'grapefruit', 'banana', 'melon'];
    $scope.setToMango = function () {
        $scope.fruit = 'mango';
    };
    $scope.Brands = ['Demo', 'Kakashi', 'Nikuya', 'Oishi Buffet', 'Shabushi'];
    $scope.setBrand = function () {
        $scope.Brand = 'Demo';
    };
}])