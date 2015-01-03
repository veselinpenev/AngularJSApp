adsModule.controller('EditAdsController', function ($scope, $location, $routeParams, userPage) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Edit Ad');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.ad={};
    var changeImage = false;
    userPage.getById(id)
        .$promise
        .then(function (data) {
            $scope.ad = data;
            if(data.imageDataUrl) {
                fileLoad(data.imageDataUrl);
            }
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

    $scope.fileSelected = function (fileInputField) {
        var file = fileInputField.files[0];
        if(file.type.match(/image\/.*/)){
            var reader = new FileReader();
            reader.onload = function () {
                $scope.ad.imageDataUrl = reader.result;
                fileLoad(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            $('#preview').html('<p>File type not supported!</p>');
        }
    };

    function fileLoad(result) {
        $('#preview').html('<img class="picture" src="' + result + '">');
    }

    $scope.editAd = function (ad, form) {
        ad.changeImage = changeImage;
        userPage.edit(id,ad)
            .$promise
            .then(function (data) {
                $location.path('/user/ads');
                noty({
                        text: "Successfully edited Ad",
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
    };

    $scope.deleteImage = function () {
        $scope.ad.imageDataUrl = null;
        $('#preview').html('');
        changeImage = true;
    }

    $scope.changeImageClick = function () {
        changeImage = true;
    }

});