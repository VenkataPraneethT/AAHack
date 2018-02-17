angular.module("customerInteractionsApp")
			.controller('CustomerLoginController',
				[
					'$scope',
					'$http',
					'CustomerDetails',
          '$routeParams',

					CustomerLoginController
				]
			 );

		function CustomerLoginController($scope, $http, CustomerDetails,$routeParams) {
		   	this.$scope = $scope;
				this.$http = $http;
        this.CustomerDetails = CustomerDetails;
        this.$routeParams = $routeParams;

				this.loading = true;
      


		};

		CustomerLoginController.prototype = {
		    getCustomerAuthToken: function() {
						var self = this;
						// console.log(self.customerUserName, self.customerPassword, "test")
						if(self.customerUserName && self.customerPassword){
							self.CustomerDetails.authenticateUser(self.customerUserName, self.customerPassword)
								.success(function(data) {
										console.log(data, "data");
										localStorage.setItem('userToken',data["access_token"]);
											// self.formArrayData(data);
											// self.loading = false;
								});
						}

		    }

		};
