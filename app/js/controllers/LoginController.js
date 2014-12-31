adsModule.controller('LoginController', function ($scope, $location, mainData) {
    $('#changeHeader').text('Login');

    $scope.loginUser = function (login, form){
        mainData.login(function (data) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('isAdmin', data.isAdmin);
            localStorage.setItem('username', data.username);
            $location.path('/user/home');
            noty({
                    text: "Successfully login!",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, login.username, login.password)
    }
});