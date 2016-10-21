angular.module('TicketApp').controller('OpenTicketController', ['$scope', '$timeout', '$q','$http', function ($scope, $timeout, $q,$http) {

    $scope.merchants = [];
    $scope.brands = [];
    $scope.shops = [];

    //console.log($scope.merchants)
    var apiMerchant = 'http://localhost:55795/api/MerchantApi/ListMerchant';
    $http.get(apiMerchant).
    success(function (data) {
        $scope.merchants = data;
    })

    $scope.merchantChange = function () {
        var apiBrand = 'http://localhost:55795/api/MerchantApi/ListBrandInfo/0';
        $http.get(apiBrand).
        success(function (data) {
            $scope.brands = data;
        })
    }

    $scope.brandChange = function () {
        var apiShop = 'http://localhost:55795/api/MerchantApi/ListShopInfo/0';
        $http.get(apiShop).
        success(function (data) {
            $scope.shops = data;
        })
    }

    $scope.ticketGroups = ['All ticket',
                          'ข้อมูลไม่อัพเดต/ยอดไม่เข้า',
                          'เข้าโปรแกรมไม่ได้',
                          'ปรับแก้ config&data (user ไม่สามารถทำได้เอง)',
                          'user สอบถาม/สอนวิธีการใช้งาน (user ทำเองได้)',
                          'User Error',
                          'Printer',
                          'Member Online Point',
                          'เครืองเสีย/ลงโปรแกรมใหม่',
                          'Bug',
                          'Windows',
                          'Virus',
                          'DNS (ไม่สามารถเข้าใช้งานได้, DNS ไม่อัพเดต)',
                          'รายงานไม่ถูกต้อง',
                          'Other'
    ];

    $scope.setInfo = function () {
        $scope.ticketGroup = 'ข้อมูลไม่อัพเดต/ยอดไม่เข้า';
    }

    $scope.today = new Date();
    
    
    //$scope.fruits = ['apple', 'orange', 'mango', 'grapefruit', 'banana', 'melon'];
    //$scope.setToMango = function () {
    //    $scope.fruit = 'mango';
    //};
    //$scope.Brands = ['Demo', 'Kakashi', 'Nikuya', 'Oishi Buffet', 'Shabushi'];
    //$scope.setBrand = function () {
    //    $scope.Brand = 'Demo';
    //};
}])