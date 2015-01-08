adsModule.controller('AdminsTownsList', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Towns');
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

    function updateTowns (sort){

        adminPage.getTowns(function (resp) {
            $scope.townsList = resp;
        },$scope.adsParams, sort)
    }

    updateTowns(sort);

    $scope.clickedSortIdTown = function () {
        if(sortById == '-Id'){
            sortById = 'Id';
            sort =  'Id';
        } else if(sortById == 'Id') {
            sortById = '-Id';
            sort =  '-Id';
        }
        sortByName = '-Name';
        updateTowns(sort);
    }

    $scope.clickedSortNameTown = function () {
        if(sortByName == '-Name'){
            sortByName = 'Name';
            sort =  'Name';
        } else if(sortByName == 'Name') {
            sortByName = '-Name';
            sort =  '-Name';
        }
        sortById = '-Id';
        updateTowns(sort);
    }

    $scope.pageChange = function () {
        updateTowns(sort);
    }
});