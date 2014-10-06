var app = angular.module('devSocial');

app.controller('homeCtrl', function($scope) {
	$scope.loginForm = false;
	$scope.signUpForm = false;

	$scope.showLoginForm = function(){
		$scope.loginForm = !$scope.loginForm;
		$scope.signUpForm = false;
	}	
	$scope.showSignUpForm = function(){
		$scope.signUpForm = !$scope.signUpForm;
		$scope.loginForm = false;
	}
})