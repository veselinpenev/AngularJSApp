var adsModule = angular.module('adsModule', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/all-ads.html'
		})
		$routeProvider.when('/login', {
			templateUrl: 'templates/login.html'
		})
		$routeProvider.when('/register', {
			templateUrl: 'templates/register.html'
		});
		$routeProvider.otherwise({redirectTo: '/'})
	});
