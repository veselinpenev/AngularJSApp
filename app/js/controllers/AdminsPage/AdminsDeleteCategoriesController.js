adsModule.controller('AdminsDeleteCategoriesController', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Delete Categories');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.category = {};
    $scope.category.username = $routeParams.name;
    $scope.deleteCategory = function () {
        adminPage.deleteCategory(function () {
            $scope.$emit('updateCategories');
            showSuccess('Successfully delete category!');
            $location.path('/admin/categories/list');
        }, id);
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