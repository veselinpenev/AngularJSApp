adsModule.factory('userPage', function ($resource, $http) {
	var baseUrl = 'http://localhost:1337/api/user/';
	var access_token = localStorage.getItem('access_token');
	var page = 1;
	$http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;

	var resource = $resource(
		baseUrl + 'ads/:id',
		{id: '@id'},
		{ update: {
			method: 'PUT'
		}
		});

	function getAllAds() {
		return resource.get();
	}

	function createNewAd(ad) {
		return resource.save(ad);
	}

	function getAdById(id) {
		return resource.get({id: id});
	}

	function editAd(id, ad) {
		return resource.update({id: id}, ad);
	}

	function deleteAd(id) {
		return resource.delete({id: id});
	}

	function logout(success){
		$http({
			method: 'POST',
			url: baseUrl + 'Logout',
			headers: {
				"Authorization": "Bearer " + access_token
			}
		}).success(function (data, status, headers, config) {
			success(data)
		})
			.error(function (data, status, headers, config) {
				showErrorMessage(data.error_description);
			})
	}

	function getAllUserAds(success, statusId){
		var url = baseUrl + 'ads?pagesize=10&startpage=' + page;
		if(statusId != -1){
			url+='&status='+statusId;
		}

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
				showErrorMessage('Please try again');
			})
	}

	function deactivateAds(success, id){
		var url = baseUrl + 'ads/deactivate/' + id;
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
				showErrorMessage('Please try again');
			})
	}

	function publishAgain(success, id) {
		var url = baseUrl + 'ads/publishagain/' + id;
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
				showErrorMessage(data.error_description);
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
		getAll: getAllAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		delete: deleteAd,
		logout: logout,
		getAllUserAds: getAllUserAds,
		deactivateAds: deactivateAds,
		publishAgain: publishAgain,
	}
});