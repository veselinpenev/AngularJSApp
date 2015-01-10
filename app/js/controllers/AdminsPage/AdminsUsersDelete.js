adsModule.controller('AdminsUsersDelete', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Delete Users');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.userProfile = JSON.parse(sessionStorage.getItem('updateUser'));
   
    $scope.adminsDeleteUser = function (username) {
        adminPage.deleteUserProfile(function (resp) {
            showSuccess('Successfully delete user profile!');
            $location.path('/admin/users/list');
        }, username)
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