adsModule.controller('PublishNewAd', function ($scope, $location, userPage) {
    if(!localStorage.getItem('access_token')){
        $location.path('/login');
        return
    }
    $scope.imageUrl = null;
    $('#changeHeader').text('Publish New Ad');
    $('#menu').load('/templates/menuUser.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    $scope.fileSelected = function (fileInputField) {
        var file = fileInputField.files[0];
        if(file.type.match(/image\/.*/)){
            var reader = new FileReader();
            reader.onload = function () {
                $scope.imageUrl = reader.result;
                $('#preview').html('<img class="picture" src="' + reader.result + '">');
            }
            reader.readAsDataURL(file);
        } else {
            $('#preview').html('<p>File type not supported!</p>');
        }
    }

    $scope.publishNewAd = function (ad, form) {
        if($scope.imageUrl != null) {
            ad.imageDataUrl = $scope.imageUrl;
        }
        userPage.create(ad)
            .$promise
            .then(function (data) {
                $location.path('/user/home');
                noty({
                        text: "Successfully created",
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