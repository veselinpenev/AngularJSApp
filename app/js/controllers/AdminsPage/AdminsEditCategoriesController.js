adsModule.controller('AdminsEditCategoriesController', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Edit Categories');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.category = {};
    $scope.category.username = $routeParams.name;
    $scope.editCategory = function (name) {
        var category = {};
        category.name = name.username;
        adminPage.editCategory(function () {
            $scope.$emit('updateCategories');
            showSuccess('Successfully edit category!');
            $location.path('/admin/categories/list');
        }, category, id);
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