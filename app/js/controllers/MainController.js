adsModule.controller('MainController', function ($scope, mainData) {

    $scope.filteredTodos = [$scope.data]
        ,$scope.currentPage = 1
        ,$scope.numPerPage = 10
        ,$scope.maxSize = 5;


    $scope.makeTodos = function() {
        $scope.todos = [];
        for (i=1;i<=1000;i++) {
            $scope.todos.push({ text:'todo '+i, done:false});
        }
    };
    $scope.makeTodos();

    $scope.numPages = function () {
        return Math.ceil($scope.todos.length / $scope.numPerPage);
    };

    $scope.$watch('currentPage + numPerPage', function() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredTodos = $scope.todos.slice(begin, end);
    });

    mainData.getAllAds(function (resp) {
        $scope.data = resp;
    },$scope.currentPage, -1, -1);
    mainData.getAllTowns(function (resp) {
        $scope.allTowns = resp;
    });
    mainData.getAllCategories(function (resp) {
        $scope.allCategories = resp;
    });
})