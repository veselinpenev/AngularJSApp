adsModule.controller('UserAllAdsController', function ($scope, $location, mainData) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Home');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();
});