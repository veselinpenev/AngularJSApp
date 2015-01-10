adsModule.controller('AdminsDeleteTowns', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Delete Town');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.town = {};
    $scope.town.username = $routeParams.name;
    $scope.deleteTown = function () {
        adminPage.deleteTowns(function () {
            $scope.$emit('updateTowns');
            showSuccess('Successfully delete town!');
            $location.path('/admin/towns/list');
        }, id);
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