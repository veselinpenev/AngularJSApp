adsModule.controller('AdminsCategoryList', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Categories');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var sort = -1;
    var sortById = '-Id';
    var sortByName = '-Name';
    $scope.adsParams = {
        startPage: 1,
        pageSize: 10
    };

    function updateCategory (sort){
        adminPage.getCategory(function (resp) {
            $scope.categoryList = resp;
        }, $scope.adsParams, sort);
    }

    updateCategory(sort);

    $scope.clickedSortIdCategory = function () {
        if(sortById == '-Id'){
            sortById = 'Id';
            sort = 'Id';
        } else if(sortById == 'Id') {
            sortById = '-Id';
            sort = '-Id';
        }
        sortByName = '-Name';
        updateCategory(sort);
    };

    $scope.clickedSortNameCategory = function () {
        if(sortByName == '-Name'){
            sortByName = 'Name';
            sort = 'Name';
        } else if(sortByName == 'Name') {
            sortByName = '-Name';
            sort = '-Name';
        }
        sortById = '-Id';
        updateCategory(sort);
    };

    $scope.pageChange = function () {
        updateCategory(sort);
    }
});