adsModule.controller('AdminsAdsController', function ($scope, $location, adminPage) {
    if(!localStorage.getItem('access_token') || !localStorage.getItem('isAdmin')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Ads');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.categoryId = -1;
    $scope.townId = -1;
    $scope.statusId = -1;
    $scope.active = 'active';


    updateData();

    function updateData(){
        adminPage.getAllAds(function (resp) {
            $scope.allAdminAds = resp;
        }, 1,$scope.categoryId, $scope.townId, $scope.statusId)
    }

    $scope.clickCategories = function(id){
        $scope.categoryId = id;
        updateData();
    }

    $scope.clickTowns = function(id){
        $scope.townId = id;
        updateData();
    }
    $scope.clickStatus = function(status){
        $scope.statusId = status;
        updateData();
    }

    $scope.adminApproveAd = function (id) {
        adminPage.approveAd(function () {
            updateData();
            showSuccess("Successfully approve ad");
        }, id)
    }

    $scope.adminRejectAd = function (id) {
        adminPage.rejectAd(function () {
            updateData();
            showSuccess("Successfully reject ad");
        }, id)
    }

    function showSuccess(msg) {
        noty({
                text: msg,
                type: 'success',
                layout: 'topCenter',
                closeWith: ["button"],
                timeout: 3000}
        );
    }
});