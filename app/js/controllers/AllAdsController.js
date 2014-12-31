adsModule.controller('AllAdsController', function ($scope, mainData) {
    $('#changeHeader').text('Home');

    var townId = -1;
    var categoryId = -1;
    $scope.isActiveCategory = -1;
    $scope.isActiveTown = -1;
    $scope.active = 'active';

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

})