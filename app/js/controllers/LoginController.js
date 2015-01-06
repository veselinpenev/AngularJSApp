adsModule.controller('LoginController', function ($scope, $location, mainData) {
    $('#changeHeader').text('Login');
    $('#menu').load('/templates/defaultMenu.html');

    $scope.loginUser = function (login, form){
        mainData.login(function (data) {
            var isAdmin = data.isAdmin || false;
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('isAdmin', isAdmin);
            localStorage.setItem('username', data.username);
            if(data.isAdmin){
                $location.path('/admin/ads');
            } else {
                $location.path('/user/home');
            }
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