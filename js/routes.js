var app = angular.module('plumberApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'html/home.html',
		controller: 'plumbingCtrl'
	})
	.when ('/about',
	{
		templateUrl: 'html/about.html',
		controller: 'plumbingCtrl'
	})
	.when('/testimonials',
	{
		templateUrl: 'html/testimonials.html',
		controller: 'plumbingCtrl'
	})
	.when ('/photos',
	{
		templateUrl: 'html/photos.html',
		controller: 'plumbingCtrl'
	})
		.when ('/contact',
	{
		templateUrl: 'html/contact.html',
		controller: 'plumbingCtrl'
	})
	.otherwise({ redirectTo: '/'})
});
