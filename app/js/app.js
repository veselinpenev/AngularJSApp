var adsModule = angular.module('adsModule', ['ngRoute','ngResource'])
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
			templateUrl: 'templates/publishNewAd.html',
			controller: 'PublishNewAd'
		});
		$routeProvider.when('/user/ads', {
			templateUrl: 'templates/userAds.html',
			controller: 'UserAllAdsController'
		});
		$routeProvider.when('/user/ads/delete/:id', {
			templateUrl: 'templates/deleteAds.html',
			controller: 'DeleteAdsController'
		});
		$routeProvider.when('/user/ads/edit/:id', {
			templateUrl: 'templates/editAds.html',
			controller: 'EditAdsController'
		});
		$routeProvider.when('/user/profile', {
			//templateUrl: 'templates/publishNewAd.html',
			//controller: 'PublishNewAd'
		});
		$routeProvider.when('/logout', {
			templateUrl: 'templates/logout.html',
			controller: 'LogoutController'
		});
		$routeProvider.otherwise({redirectTo: '/'})
	});
