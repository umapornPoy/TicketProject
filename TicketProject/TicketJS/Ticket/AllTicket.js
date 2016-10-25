angular.module('TicketApp').controller('AllTicketController', ['$scope', '$http', function ($scope, $http) {

    $http.get("http://localhost:55795/api/TicketApi/ticketInfo").success(function (data) {
        $scope.TicketInfo = data;
        console.log($scope.TicketInfo);

        $scope.Merchant = " http://localhost:55795/api/MerchantApi/ListMerchant";

    $scope.showColumnLines = false;
    $scope.showRowLines = true;
    $scope.showBorders = true;
    $scope.rowAlternationEnabled = true;

    $scope.dataGridOptions = {
        dataSource: $scope.TicketInfo,
        
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
                dataField: "MerchantID",
                caption: "Merchant Name",                
                width: 150

            },
            {
                dataField: "TicketNumber",
                caption: "Ticket Info",
                width: 150,
                cellTemplate: function (container, item) {
                    var data = item.data,
                        markup = "<a href='#/ReplyTicket/" + data.TicketNumber + "'>" + data.TicketNumber + "</a>";
                    container.append(markup);
                }
            },
            {
                dataField: "TicketTitle",
                caption: "Ticket Title",
                width: 270,   
            },
            
            //"Ticket Group",
            {
                dataField: "OpenBy",
                caption: "Open By",
                width: 130
            },
            {
                dataField: "OpenDate",
                caption: "Open Date",
                width: 150,
               
            }//, {
               // dataField: "BirthDate",
               // dataType: "date",
               // width: 125
           // }
           , {
               dataField: "Status",
                width: 130,
                alignment: "center",
                cellTemplate: function (container, item) {
                    var data = item.data,
                        markup = /*"<div class='hidden-sm hidden-xs btn-group'>"
                                + "<button class='btn btn-warning btn-xs btn-round' onclick='EditDistributorsVendor(" + data.TicketNumber + ")'>"
                                + "<i class='ace-icon fa fa-pencil icon-only bigger-120'></i>"
                                + "</button>"

                                + "<button class='btn btn-warning btn-xs btn-round' onclick='EditDistributorsVendor(" + data.TicketNumber + ")'>"
                                + "<i class='ace-icon fa fa-pencil icon-only bigger-120'></i>"
                                + "</button>"
                                + "</div>"  */
                                "<span class='label label-lg label-danger arrowed-in'>Closed</span>";
                             //+"<span class='label label-lg label-pink arrowed arrowed-right'>Open</span>"
                             //+"<span class='label label-lg label-warning arrowed'>Assigned</span>"
                            //+"<span class='label label-lg label-info arrowed-in arrowed-in-right'>Approve</span>"
                            //+"<span class='label label-lg label-success arrowed-right'>Reopen</span>";
                    container.append(markup);
                }
            }, {
                caption: "Action",
                dataField: "delete",
                width: 130,
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