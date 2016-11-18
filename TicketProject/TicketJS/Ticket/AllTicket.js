angular.module('TicketApp').controller('AllTicketController', ['$scope', '$http','$filter', function ($scope, $http, $filter) {

    $http.get("http://localhost:55795/api/TicketApi/ticketInfo").success(function (data) {
        $scope.TicketInfo = data;
        console.log($scope.TicketInfo);

        $scope.Merchant = " http://localhost:55795/api/MerchantApi/ListMerchant";

    $scope.showColumnLines = false;
    $scope.showRowLines = true;
    $scope.showBorders = true;
    $scope.rowAlternationEnabled = true;

    //if ($location.path() == "/AllTicket") {
    //    $scope.StatusID = 1;
    //} else {
    //    $scope.StatusID = 2;
    //}

    $scope.dataGridOptions = {
        dataSource: $scope.TicketInfo,
        //rowTemplate: $("#gridRow"),
        columnWidth: "auto",
        paging: {
            enabled: false
        },
        bindingOptions: {
            //showColumnLines: "showColumnLines",
            showRowLines: "showRowLines",
            showBorders: "showBorders",
            rowAlternationEnabled: "rowAlternationEnabled"
        },
        searchPanel: {
            visible: true,
            width:250
        },

        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        
        columns: [
            {
                dataField: "BrandName",
                caption: "Brand Name",                

            },
            {
                dataField: "TicketNumber",
                caption: "Ticket Info",
                cellTemplate: function (container, item) {
                    //var FilterTicketInfo = $filter('filter')($scope.TicketInfo, { TicketNumber: TicketNumber });
                    //console.log(FilterTicketInfo);
                    //localStorage.setItem('TicketNumber', FilterTicketInfo[0].TicketNumber);
                    var data = item.data,
                        markup = "<a href='#/ReplyTicket/" + data.TicketNumber + "'>" + data.TicketNumber + "</a>";                 
                    container.append(markup);
                }
            },
            {
                dataField: "TicketTitle",
                caption: "Ticket Title",  
            },
            
            //"Ticket Group",
            {
                dataField: "OpenBy",
                caption: "Open By",
            },
            {
                dataField: "OpenDate",
                caption: "Open Date",
               
            }//, {
               // dataField: "BirthDate",
               // dataType: "date",
               // width: 125
           // }
           , {
               dataField: "Status",
                alignment: "center",
                cellTemplate: function (container, item) {

                    if (item.data.StatusID == 1) {
                        var data = item.data,

                        markup = "<span class='label label-lg label-pink arrowed arrowed-right'>Open</span>"
                        container.append(markup);
                    }

                    if (item.data.StatusID == 2) {
                        var data = item.data,
                        markup = "<span class='label label-lg label-warning arrowed'>Assigned</span>"
                        container.append(markup);
                    }

                    if (item.data.StatusID == 3) {
                        var data = item.data,

                        markup = "<span class='label label-lg label-danger arrowed-in'>Closed</span>"
                        container.append(markup);
                    }

                    if (item.data.StatusID == 4) {
                        var data = item.data,

                        markup = "<span class='label label-lg label-info arrowed-in arrowed-in-right'>Approve</span>"
                        container.append(markup);
                    }

                    if (item.data.StatusID == 5) {
                        var data = item.data,

                        markup = "<span class='label label-lg label-success arrowed-right'>Reopen</span>"
                        container.append(markup);
                    }                                                 
                }
            }, {
                caption: "Action",
                dataField: "delete",
                alignment: "center",
                cellTemplate: function (container, item) {
                    var data = item.data,
                        markup = "<div class='hidden-sm hidden-xs btn-group'>"
                                + "<a class='btn btn-danger btn-xs btn-round' onclick='DeleteDistributorsVendor(" + data.VendorID + ")'>"
                                + "<i class='ace-icon fa fa-trash icon-only bigger-120'></i>"
                                + "</a></div>";
                    container.append(markup);
                }
            }

        ]

    };

    });
    
}]);