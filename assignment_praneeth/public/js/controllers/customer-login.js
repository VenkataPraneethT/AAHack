angular.module("customerInteractionsApp")
			.controller('CustomerLoginController',
				[
					'$scope',
					'$http',
					'CustomerDetails',
          '$routeParams',
					'$window',
					CustomerLoginController
				]
			 );

		function CustomerLoginController($scope, $http, CustomerDetails,$routeParams, $window) {
		   	this.$scope = $scope;
				this.$http = $http;
        this.CustomerDetails = CustomerDetails;
        this.$routeParams = $routeParams;
				this.$window = $window;
				this.loading = true;
				this.errorMessage = "";
				this.isError = false;


		};

		CustomerLoginController.prototype = {
		    getCustomerAuthToken: function() {
						var self = this;
						// console.log(self.customerUserName, self.customerPassword, "test")
						if(self.customerUserName && self.customerPassword){
							self.CustomerDetails.authenticateUser(self.customerUserName, self.customerPassword)
								.success(function(data) {
										console.log(data, "data");
										if(data){
											self.$window.location.href = '/customerPortal';
										}
										localStorage.setItem('userToken',data["access_token"]);
											// self.formArrayData(data);
											// self.loading = false;
								})
								.error(function(data) {
										self.isError = true;
										// self.errorMessage = "Please enter valid credentials."
								});
						}

		    }

		};
