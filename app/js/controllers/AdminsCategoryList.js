adsModule.controller('AdminsCategoryList', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Categories');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    adminPage.getCategory(function (resp) {
        $scope.categoryList = resp;
    })

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