adsModule.controller('AdminsEditAdController', function ($scope, $location, $routeParams, adminPage) {
    if(!localStorage.getItem('access_token') || !localStorage.getItem('isAdmin')){
        $location.path('/login');
        return
    }
    $('#changeHeader').text('Ads');
    $('#menu').load('/templates/menuAdmin.html');
    $('#username').text(localStorage.getItem('username'));
    $('#logout').addClass('navbar-collapse collapse').show();

    var id = $routeParams.id;
    $scope.ad={};
    var changeImage = false;
    adminPage.getAdById(function (data) {
        var printDate = new Date(data.date);
        $scope.ad = data;
        $scope.printDate = printDate;
        if(data.imageDataUrl) {
            fileLoad(data.imageDataUrl);
        }
    },id);


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

    $scope.adminEditAd = function (ad, form) {
        ad.date = $scope.printDate.toISOString();
        ad.changeImage = changeImage;
        adminPage.editAd(function () {
            $location.path('/admin/ads');
            showSuccess('Successfully edit ad!');
        }, ad);
    }

    $scope.deleteImage = function () {
        $scope.ad.imageDataUrl = null;
        $('#preview').html('');
        changeImage = true;
    }

    $scope.changeImageClick = function () {
        changeImage = true;
    }

    function showSuccess(msg) {
        noty({
                text: msg,
                type: 'success',
                layout: 'topCenter',
                closeWith: ["button"],
                timeout: 3000}
        );
    }
});