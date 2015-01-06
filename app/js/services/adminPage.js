adsModule.factory('adminPage', function ($resource, $http) {
    var baseUrl = 'http://localhost:1337/api/admin/';
    var access_token = localStorage.getItem('access_token');
    var page = 1;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

    function getAllAds (success, page, categoryId, townId, status) {
        var url = baseUrl + 'ads?pagesize=10&startpage=' + page;
        if(status != -1){
            url+='&status='+ status;
        }
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
    }

    function approveAd (success, id) {
        var url = baseUrl + 'ads/approve/' + id;

        $http({
            method: 'PUT',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function rejectAd (success, id) {
        var url = baseUrl + 'ads/reject/' + id;

        $http({
            method: 'PUT',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function getAdById (success, id) {
        var url = baseUrl + 'ads/' + id;

        $http({
            method: 'GET',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function editAd (success, ad) {
        var url = baseUrl + 'ads/' + ad.id;

        $http({
            method: 'PUT',
            url: url,
            data: ad,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function deleteAd (success, id) {
        var url = baseUrl + 'ads/' + id;

        $http({
            method: 'DELETE',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function getCategory (success) {
        var url = baseUrl + 'Categories';

        $http({
            method: 'GET',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function createCategory (success, data) {
        var url = baseUrl + 'Categories';

        $http({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function editCategory (success, data, id) {
        var url = baseUrl + 'Categories/' + id;

        $http({
            method: 'PUT',
            url: url,
            data: data,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function deleteCategory (success, id) {
        var url = baseUrl + 'Categories/' + id;

        $http({
            method: 'DELETE',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function getTowns (success) {
        var url = baseUrl + 'Towns';

        $http({
            method: 'GET',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function createTowns (success, data) {
        var url = baseUrl + 'Towns';

        $http({
            method: 'POST',
            url: url,
            data: data,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function editTowns (success, data, id) {
        var url = baseUrl + 'Towns/' + id;

        $http({
            method: 'PUT',
            url: url,
            data: data,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
    }

    function deleteTowns (success, id) {
        var url = baseUrl + 'Towns/' + id;

        $http({
            method: 'DELETE',
            url: url,
            headers: {
                "Authorization": "Bearer " + access_token
            }
        }).success(function (data, status, headers, config) {
            success(data)
        })
            .error(function (data, status, headers, config) {
                showErrorMessage("Please try again");
            })
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

    return {
        getAllAds: getAllAds,
        approveAd: approveAd,
        rejectAd: rejectAd,
        getAdById: getAdById,
        editAd: editAd,
        deleteAd: deleteAd,
        getCategory: getCategory,
        createCategory: createCategory,
        editCategory: editCategory,
        deleteCategory: deleteCategory,
        getTowns: getTowns,
        createTowns: createTowns,
        editTowns: editTowns,
        deleteTowns: deleteTowns
    }
});