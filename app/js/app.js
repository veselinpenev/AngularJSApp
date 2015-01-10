var adsModule = angular.module('adsModule', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/all-ads.html',
			controller: 'AllAdsController'
		});
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		});
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'RegisterController'
		});
		$routeProvider.when('/user/home', {
			templateUrl: 'templates/all-ads.html',
			controller: 'UserHome'
		});
		$routeProvider.when('/user/ads/publish', {
			templateUrl: '../templates/usersPage/publishNewAd.html',
			controller: 'PublishNewAd'
		});
		$routeProvider.when('/user/ads', {
			templateUrl: '../templates/usersPage/userAds.html',
			controller: 'UserAllAdsController'
		});
		$routeProvider.when('/user/ads/delete/:id', {
			templateUrl: '../templates/usersPage/deleteAds.html',
			controller: 'DeleteAdsController'
		});
		$routeProvider.when('/user/ads/edit/:id', {
			templateUrl: '../templates/usersPage/editAds.html',
			controller: 'EditAdsController'
		});
		$routeProvider.when('/user/profile', {
			templateUrl: '../templates/usersPage/editUser.html',
			controller: 'EditUserController'
		});
		$routeProvider.when('/logout', {
			templateUrl: 'templates/logout.html',
			controller: 'LogoutController'
		});
		$routeProvider.when('/admin/ads', {
			templateUrl: '../templates/adminsPage/adminAds.html',
			controller: 'AdminsAdsController'
		});
		$routeProvider.when('/admin/ads/edit/:id', {
			templateUrl: '../templates/adminsPage/adminEditAd.html',
			controller: 'AdminsEditAdController'
		});
		$routeProvider.when('/admin/ads/delete/:id', {
			templateUrl: '../templates/adminsPage/adminsDeleteAd.html',
			controller: 'AdminsDeleteAdController'
		});
		$routeProvider.when('/admin/categories/list', {
			templateUrl: '../templates/adminsPage/adminsCategoryList.html',
			controller: 'AdminsCategoryList'
		});
		$routeProvider.when('/admin/categories/create', {
			templateUrl: '../templates/adminsPage/adminCreateCategory.html',
			controller: 'AdminsCreateCategory'
		});
		$routeProvider.when('/admin/categories/edit/:id/name/:name', {
			templateUrl: '../templates/adminsPage/adminsEditCategories.html',
			controller: 'AdminsEditCategoriesController'
		});
		$routeProvider.when('/admin/categories/delete/:id/name/:name', {
			templateUrl: '../templates/adminsPage/adminsDeleteCategories.html',
			controller: 'AdminsDeleteCategoriesController'
		});
		$routeProvider.when('/admin/towns/list', {
			templateUrl: '../templates/adminsPage/adminsTownsList.html',
			controller: 'AdminsTownsList'
		});
		$routeProvider.when('/admin/towns/create', {
			templateUrl: '../templates/adminsPage/adminCreateTowns.html',
			controller: 'AdminsCreateTowns'
		});
		$routeProvider.when('/admin/towns/edit/:id/name/:name', {
			templateUrl: '../templates/adminsPage/adminsEditTowns.html',
			controller: 'AdminsEditTowns'
		});
		$routeProvider.when('/admin/towns/delete/:id/name/:name', {
			templateUrl: '../templates/adminsPage/adminsDeleteTowns.html',
			controller: 'AdminsDeleteTowns'
		});
		$routeProvider.when('/admin/users/list', {
			templateUrl: '../templates/adminsPage/adminsUsersList.html',
			controller: 'AdminsUsersList'
		});
		$routeProvider.when('/admin/users/edit', {
			templateUrl: '../templates/adminsPage/adminsUsersEdit.html',
			controller: 'AdminsUsersEdit'
		});
		$routeProvider.when('/admin/users/delete', {
			templateUrl: '../templates/adminsPage/adminsUsersDelete.html',
			controller: 'AdminsUsersDelete'
		});
		$routeProvider.otherwise({redirectTo: '/'})
	});
