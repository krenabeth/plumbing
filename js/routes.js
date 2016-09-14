var app = angular.module('plumberApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'html/home.html',
		controller: 'plumbingController'
	})
	.when ('/about',
	{
		templateUrl: 'html/about.html',
		controller: 'plumbingController'
	})
	.when('/testimonials',
	{
		templateUrl: 'html/testimonials.html',
		controller: 'plumbingController'
	})
	.when ('/photos',
	{
		templateUrl: 'html/photos.html',
		controller: 'plumbingController'
	})
		.when ('/contact',
	{
		templateUrl: 'html/contact.html',
		controller: 'plumbingController'
	})
	.otherwise({ redirectTo: '/'})
});
