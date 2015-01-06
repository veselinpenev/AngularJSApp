adsModule.controller('AdminsDeleteAdController', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Delete');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.ad={};
    var changeImage = false;
    adminPage.getAdById(function (data) {
        $scope.ad = data;
    },id);


    $scope.adminDeleteAd = function (id) {
        adminPage.deleteAd(function (resp) {
            showSuccess('Successfully delete ad!');
            $location.path('/admin/ads');
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