adsModule.controller('RegisterController', function ($scope, $location, mainData) {
    $('#changeHeader').text('Register');
    $('#menu').load('/templates/defaultMenu.html');

    $scope.registerUser = function (register, form){
        if(register.password != register.confirmPassword){
            noty({
                    text: "Different password",
                    type: 'error',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
            return
        }

        mainData.register(function (data) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('isAdmin', undefined);
            localStorage.setItem('username', register.username);
            $location.path('/user/home');
            noty({
                    text: "Successfully register!",
                    type: 'success',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        }, register.username, register.password, register.confirmPassword, register.name, register.email, register.phone, register.townId)
    }
});