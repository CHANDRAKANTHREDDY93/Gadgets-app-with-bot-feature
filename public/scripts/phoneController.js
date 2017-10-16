var app = angular.module("gadgets");

app.controller("phoneController", function($scope, phoneService){
	var init = function(){
		var phone = phoneService.getPhones();
		phone.then(function(data){
			console.log(data);
		});
	}


	init();					//calling function
});