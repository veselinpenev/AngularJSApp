adsModule.controller('AdminsUsersList', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || localStorage.getItem('isAdmin') != 'true'){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Users');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var sort = -1;
    var sortByUserName = '-UserName';
    var sortByName = '-Name';
    var sortByEmail = '-Email';
    var sortByPhone = '-PhoneNumber';
    $scope.adsParams = {
        startPage: 1,
        pageSize: 10
    };

    function updateUsers (sort){

        adminPage.getUsers(function (resp) {
            $scope.usersList = resp;
        },$scope.adsParams, sort)
    }

    updateUsers(sort);

    $scope.clickedSortByUsername = function () {
        if(sortByUserName == '-UserName'){
            sortByUserName = 'UserName';
            sort = 'UserName';
        } else if(sortByUserName == 'UserName') {
            sortByUserName = '-UserName';
            sort = '-UserName';
        }
        sortByName = '-Name';
        sortByEmail = '-Email';
        sortByPhone = '-PhoneNumber';
        updateUsers(sort);
    };

    $scope.clickedSortByName = function () {
        if(sortByName == '-Name'){
            sortByName = 'Name';
            sort = 'Name';
        } else if(sortByName == 'Name') {
            sortByName = '-Name';
            sort = '-Name';
        }
        sortByUserName = '-UserName';
        sortByEmail = '-Email';
        sortByPhone = '-PhoneNumber';
        updateUsers(sort);
    };

    $scope.clickedSortByEmail = function () {
        if(sortByEmail == '-Email'){
            sortByEmail = 'Email';
            sort = 'Email';
        } else if(sortByEmail == 'Email') {
            sortByEmail = '-Email';
            sort = '-Email';
        }
        sortByUserName = '-UserName';
        sortByName = '-Name';
        sortByPhone = '-PhoneNumber';
        updateUsers(sort);
    };

    $scope.clickedSortByPhone = function () {
        if(sortByPhone == '-PhoneNumber'){
            sortByPhone = 'PhoneNumber';
            sort = 'PhoneNumber';
        } else if(sortByPhone == 'PhoneNumber') {
            sortByPhone = '-PhoneNumber';
            sort = '-PhoneNumber';
        }
        sortByUserName = '-UserName';
        sortByName = '-Name';
        sortByEmail = '-Email';
        updateUsers(sort);
    };
    
    $scope.clickedEditUser = function (username, name, email, phone, isAdmin) {
        var user = {
            username: username,
            name: name,
            email: email,
            phoneNumber: phone,
            isAdmin: isAdmin
        }
        sessionStorage.setItem('editUser', JSON.stringify(user));
        $location.path('/admin/users/edit');
    }


    $scope.pageChange = function () {
        updateUsers(sort);
    }
});