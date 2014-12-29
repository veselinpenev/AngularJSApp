adsModule.factory('mainData', function ($http, $log) {
    return {
        getAllAds : function (success, page, categoryId, townId) {
            var url = 'http://localhost:1337/api/ads?pagesize=10&startpage=' + page;
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
                    $log.warn(data);
                })
        },
        getAllTowns : function (success) {
            $http({method: 'GET', url:'http://localhost:1337/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })
        },
        getAllCategories : function (success) {
            $http({method: 'GET', url:'http://localhost:1337/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, status, headers, config) {
                    $log.warn(data);
                })
        }
    }
})