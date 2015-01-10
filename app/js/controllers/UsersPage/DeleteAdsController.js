adsModule.controller('DeleteAdsController', function ($scope, $location, $routeParams, userPage) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Delete Ad');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    userPage.getById(id)
        .$promise
        .then(function (data) {
            $scope.deleteAd = data;
        },
        function (error) {
            $location.path('/user/ads');
            noty({
                    text: "Please try again",
                    type: 'error',
                    layout: 'topCenter',
                    closeWith: ["button"],
                    timeout: 3000}
            );
        });

    $scope.confirmDeleteAd = function (id) {
        userPage.delete(id)
            .$promise
            .then(function (data) {
                $location.path('/user/ads');
                noty({
                        text: "Successfully deleted",
                        type: 'success',
                        layout: 'topCenter',
                        closeWith: ["button"],
                        timeout: 3000}
                );
            },
            function (error) {
                noty({
                        text: "Please try again",
                        type: 'error',
                        layout: 'topCenter',
                        closeWith: ["button"],
                        timeout: 3000}
                );
            });
    }
});