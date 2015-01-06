adsModule.controller('AdminsCreateCategory', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Create Categories');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.createCategory = function (name) {
        var category = {};
        category.name = name.username;
        adminPage.createCategory(function () {
            showSuccess('Successfully delete category!');
            $location.path('/admin/categories/list');
        }, category)
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