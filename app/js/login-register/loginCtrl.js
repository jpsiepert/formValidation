var app = angular.module('devSocial');

app.controller('loginCtrl', function($scope, loginService) {
$scope.postData = function(){
	debugger;
	loginService.checkUser($scope.user);
	$loginForm = false;
}

})