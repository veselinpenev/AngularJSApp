adsModule.controller('MainController', function ($scope, $location, mainData) {

    $scope.go = function (path) {
        $location.path(path);
    };

    var townId = -1;
    var categoryId = -1;
    $scope.isActiveCategory = -1;
    $scope.isActiveTown = -1;
    $scope.active = 'active';
    $scope.showLogout = false;
    $scope.adsParams = {
        startPage: 1,
        pageSize: 10
    };

    $scope.allStatus={
        1:{
            fullName: 'Inactive',
            serverName: 'Inactive'
        },
        2:{
            fullName: 'Waiting Approval',
            serverName: 'WaitingApproval'
        },
        3:{
            fullName: 'Published',
            serverName: 'Published'
        },
        4:{
            fullName: 'Rejected',
            serverName: 'Rejected'
        }
    };

    updateData();
    mainData.getAllTowns(function (resp) {
        $scope.allTowns = resp;
    });
    mainData.getAllCategories(function (resp) {
        $scope.allCategories = resp;
    });

    function updateData(){
        mainData.getAllAds(function (resp) {
            $scope.allAds = resp;
        }, $scope.adsParams, categoryId, townId);
    }

    $scope.clickCategories = function (id) {
        $scope.isActiveCategory = id;
        categoryId = id;
        updateData();
    }

    $scope.clickTowns = function (id) {
        $scope.isActiveTown = id;
        townId= id;
        updateData();
    }

    $scope.pageChange = function () {
        updateData();
    }


});