var app = angular.module('plumberApp', ['ngRoute']);

app.controller("navController",["$scope", "$location", function($scope, $location){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }
}]);

app.controller("plumbingCtrl" ["$scope", function($scope){
	$scope.photos = function(){

	}
}]);