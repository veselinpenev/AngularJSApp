adsModule.factory('userPage', function ($resource, $http) {
	$http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

	var resource = $resource(
		'http://localhost:1337/api/user/ads/:id',
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

	function logout(success, accessToken){
		$http({
			method: 'POST',
			url: 'http://localhost:1337/api/user/Logout',
			headers: {
				"Authorization": "Bearer " + accessToken
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
		logout: logout
	}
});