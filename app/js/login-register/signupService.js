var app = angular.module('devSocial');

app.service('signupService', function($http, $q) {
	this.postData = function(obj){
		debugger;
		return $http({
    	method: 'POST',
    	url: 'http://localhost:1212/signup.newUser',
    	data: {
        	firstName: obj.firstname,
        	lastName: obj.lastname,
        	username: obj.username,
        	email: obj.email,
        	password: obj.pw

    	}
    })
   };

   this.uniqueUserName = function(obj){
   	debugger;
   	return $http({
    	method: 'POST',
    	url: 'http://localhost:1212/signup.verifyUsername',
    	data: {
        username: obj.username
    	}
  	})
   }


});