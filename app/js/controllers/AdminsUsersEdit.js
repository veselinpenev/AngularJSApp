adsModule.controller('AdminsUsersEdit', function ($scope, $location, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Edit Users Profile');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.userProfile = JSON.parse(sessionStorage.getItem('editUser'));
    $scope.updateUserProfile = function (user, form) {
        var data = {
            username: $scope.userProfile.username,
            name: user.name,
            email: user.email,
            phonenumber: user.phoneNumber,
            townid: user.townId,
            isAdmin: user.isAdmin
        };
        adminPage.editUserProfile(function (resp) {
            showSuccess('Successfully change user profile!');
        }, data);
    }

    $scope.changePassword = function (user, form) {
        var data = {
            username: $scope.userProfile.username,
            newPassword: user.newPassword,
            confirmPassword: user.confirmPassword
        }

        adminPage.editUserPassword(function (resp) {
            showSuccess('Successfully change user password!');
        }, data)
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