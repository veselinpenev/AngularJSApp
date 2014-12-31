adsModule.controller('AllAdsController', function ($scope, mainData) {
    $('#changeHeader').text('Home');
    $('#menu').load('/templates/defaultMenu.html');
    $('#logout').removeClass('navbar-collapse collapse').hide();
})