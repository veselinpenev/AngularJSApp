adsModule.factory('mainData', function ($http, $log) {
    var baseUrl = 'http://localhost:1337/api/';

    return {
        getAllAds : function (success, params, categoryId, townId) {
            var url = baseUrl + 'ads?pagesize=' + params.pageSize + '&startpage=' + params.startPage;
            if(categoryId != -1){
                url+='&CategoryId='+categoryId;
            }
            if(townId != -1){
                url+='&TownId='+townId;
            }
            $http({method: 'GET', url: url})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    showErrorMessage(data.error_description);
                })
        },
        getAllTowns : function (success) {
            $http({method: 'GET', url: baseUrl + 'towns'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    showErrorMessage(data.error_description);
                })
        },
        getAllCategories : function (success) {
            $http({method: 'GET', url: baseUrl + 'categories'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    showErrorMessage(data.error_description);
                })
        },
        login : function (success, username, password) {
            $http({
                method: 'POST',
                url: baseUrl + 'user/login',
                data: {username: username, password: password}
            }).success(function (data, status, headers, config) {
                success(data)
            })
                .error(function (data, status, headers, config) {
                    showErrorMessage(data.error_description);
                })
        },
        register : function (success, username, password, confirmPassword, name, email, phone, townId ) {
            var data = {
                username: username,
                password: password,
                confirmPassword: confirmPassword,
                name: name,
                email: email,
                phone: phone
            }
            if(townId != undefined){
                data.townId = townId;
            }

            $http({
                method: 'POST',
                url: baseUrl + 'user/register',
                data: data
            }).success(function (data, status, headers, config) {
                success(data)
            })
                .error(function (data, status, headers, config) {
                    showErrorMessage('Register invalid');
                })
        }
    }

    function showErrorMessage(msg) {
        noty({
                text: msg,
                type: 'error',
                layout: 'topCenter',
                closeWith: ["button"],
                timeout: 3000}
        );
    }
})