var app = angular.module("gadgets");

app.service("phoneService", function($http){
	this.getPhones = function(){
		$http.get('/api/getPhones').then(function(res){
			console.log(res);
			return res.data;

		});

	}
});