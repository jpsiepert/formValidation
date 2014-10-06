var app = angular.module('devSocial');

app.service('loginService', function($http, $q) {
	this.checkUser = function(obj){
		debugger;
		return $http({
			method: "POST",
			url: 'http://localhost:1212/loginUser/',
			data: {username: obj.loginusername, password: obj.loginpw}
		})
		console.log(data)
	}

});