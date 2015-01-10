adsModule.controller('AdminsEditTowns', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Edit Towns');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.town = {};
    $scope.town.username = $routeParams.name;
    $scope.editTown = function (name) {
        var town = {};
        town.name = name.username;
        adminPage.editTowns(function () {
            $scope.$emit('updateTowns');
            showSuccess('Successfully edit Town!');
            $location.path('/admin/towns/list');
        }, town, id);
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