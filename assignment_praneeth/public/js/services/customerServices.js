angular.module('customerService', [])

	// each function returns a promise object
	.factory('CustomerDetails', ['$http',function($http) {
		return {
			authenticateUser : function(userName, password) {
				// return $http.post('/oauth/token' );
				console.log(userName, password, "tetst")
				var url = '/oauth/token',

						// data = {
						// 	username : userName,
						// 	password : password
						// },
						data = $.param({grant_type:"password",username : userName,
						password : password}),
						config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded',
										"Authorization":"Basic YWlyQXNpYTphaXJBc2lhQ3VzdG9tZXJBcHAxMjM0Jl4qKg=="
                },

            };

				return $http.post(url, data, config)
								
			},
			getCustomerDetails : function(pnrNumber) {
				return $http.get('/api/customer/' + pnrNumber);
			},
			delete : function(id) {
				return $http.delete('/api/customer/' + id);
			}
		}
	}]);
