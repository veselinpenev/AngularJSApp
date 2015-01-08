adsModule.factory('userPage', function ($resource, $http) {
	var baseUrl = 'http://localhost:1337/api/user/';
	var access_token = localStorage.getItem('access_token');
	function updateUserToken(){
		$http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
	}

	var resource = $resource(
		baseUrl + 'ads/:id',
		{id: '@id'},
		{ update: {
			method: 'PUT'
		}
		});

	function getAllAds() {
		updateUserToken();
		return resource.get();
	}

	function createNewAd(ad) {
		updateUserToken();
		return resource.save(ad);
	}

	function getAdById(id) {
		updateUserToken();
		return resource.get({id: id});
	}

	function editAd(id, ad) {
		updateUserToken();
		return resource.update({id: id}, ad);
	}

	function deleteAd(id) {
		updateUserToken();
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

	function getAllUserAds(success, params, statusId){
		updateUserToken();
		var url = baseUrl + 'ads?pagesize=' + params.pageSize + '&startpage=' + params.startPage;
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
		updateUserToken();
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
		updateUserToken();
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
				showErrorMessage('Please try again');
			})
	}

	function changePassword(success, password) {
		updateUserToken();
		var data = {
			oldPassword: password.oldPassword,
			newPassword: password.newPassword,
			confirmPassword: password.confirmPassword
		}
		var url = baseUrl + 'changePassword';
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
				showErrorMessage("Please check your password and try again");
			})
	}

	function getUserProfile(success) {
		updateUserToken();
		var url = baseUrl + 'profile';
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
				showErrorMessage("Please check your password and try again");
			})
	}

	function updateUserProfile(success, profile) {
		updateUserToken();
		var url = baseUrl + 'profile';
		$http({
			method: 'PUT',
			url: url,
			data: profile,
			headers: {
				"Authorization": "Bearer " + access_token
			}
		}).success(function (data, status, headers, config) {
			success(data)
		})
			.error(function (data, status, headers, config) {
				showErrorMessage("Please check your password and try again");
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
		changePassword: changePassword,
		getUserProfile: getUserProfile,
		updateUserProfile: updateUserProfile
	}
});