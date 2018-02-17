angular.module("customerInteractionsApp")
			.controller('CustomerPortalController',
				[
					'$scope',
					'$http',
					'CustomerDetails',
          '$routeParams',
					CustomerPortalController
				]
			 );

		function CustomerPortalController($scope, $http, CustomerDetails,$routeParams) {
		   	this.$scope = $scope;
				this.$http = $http;
        this.CustomerDetails = CustomerDetails;
        this.$routeParams = $routeParams;
				this.loading = true;
        
				this.getCustomerDetails();
		};

		CustomerPortalController.prototype = {
		    getCustomerDetails: function() {
						var self = this;
						self.CustomerDetails.getCustomerDetails(pnrId)
							.success(function(data) {
									console.log(data, "data");
		                // self.formArrayData(data);
										// self.loading = false;
							});
		    }
				// ,
        // loadNextSetOfRepos: function(){
        //     var self = this;
        //     self.Repositories.getNextSetRepositoryDetails(self.skipCount)
				// 			.success(function(data) {
        //         self.formArrayData(data);
				// 				self.loading = false;
				// 			});
        //       self.skipCount = self.skipCount + 100;
        // },
        // formArrayData: function(toBeFormatedData){
        //     var self = this;
        //     var columnDataArray = [];
        //     _.forEach(toBeFormatedData, function(value) {
        //           columnDataArray.push(value.repo.id);
        //           columnDataArray.push(value.repo.url);
        //           columnDataArray.push(value.repo.name);
        //           columnDataArray.push(value.actor.login);
        //           columnDataArray.push(value.created_at);
        //           self.repoDetails.push(columnDataArray);
        //           columnDataArray = [];
        //       });
        // }
		};
