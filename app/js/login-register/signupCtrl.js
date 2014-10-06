var app = angular.module('devSocial');

app.controller('signupCtrl', function($scope, signupService) {
	$scope.postData = function(){
		debugger;
		signupService.postData($scope.user);
		signupService.uniqueUserName($scope.user);
		$scope.signUpForm = false;
	}
	
})