adsModule.controller('LogoutController', function ($scope, $location, userPage) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Logout');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.confirmLogout = function (){
        userPage.logout(function (data) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('isAdmin');
            localStorage.removeItem('username');
            $location.path('/');
            noty({
                    text: "Successfully logout!",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, localStorage.getItem('access_token'))
    }
});