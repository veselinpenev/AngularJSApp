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
        }, 1, categoryId, townId);
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


});