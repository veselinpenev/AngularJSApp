adsModule.controller('UserAllAdsController', function ($scope, $location, userPage) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('My Ads');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var statusName = -1;
    $scope.isActiveStatus = -1;
    $scope.hideButton = 'hideButton';
    $scope.adsParams = {
        startPage: 1,
        pageSize: 10
    };

    updateUserAds();
    $scope.clickStatus = function (serverName) {
        $scope.isActiveStatus = serverName;
        statusName = serverName;
        updateUserAds();
    };

    function updateUserAds(){
        userPage.getAllUserAds(function (resp) {
            $scope.allUserAds = resp;
        }, $scope.adsParams, statusName)
    }

    $scope.deactivateAds = function (id) {
        userPage.deactivateAds(function () {
            updateUserAds();
            noty({
                    text: "Successfully deactivate",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, id);
    };

    $scope.publishAgain = function (id) {
        userPage.publishAgain(function () {
            updateUserAds();
            noty({
                    text: "Successfully publish again",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, id);
    };

    $scope.pageChange = function () {
        updateUserAds();
    }
});