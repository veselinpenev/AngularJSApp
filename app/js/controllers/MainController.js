adsModule.controller('MainController', function ($scope, $location, mainData) {

    $scope.go = function (path) {
        $location.path(path);
    };



})