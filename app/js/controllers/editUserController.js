adsModule.controller('EditUserController', function ($scope, $location, userPage) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Edit User Profile');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.changePassword = function (password, form){

        userPage.changePassword(function (resp) {
            noty({
                    text: "Successfully changed password",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, password)
    }

    userPage.getUserProfile(function (resp) {
        $scope.editProfile = resp;
    });

    $scope.updateUserProfile = function (profile, form){
        userPage.updateUserProfile(function (resp) {
            noty({
                    text: "Successfully edit profile",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, profile)
    }

});