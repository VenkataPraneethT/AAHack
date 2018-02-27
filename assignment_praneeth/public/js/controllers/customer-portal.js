angular.module("customerInteractionsApp")
			.controller('CustomerPortalController',
				[
					'$scope',
					'$http',
					'CustomerDetails',
          '$routeParams',
					'InputFileDetails',
					CustomerPortalController
				]
			 )
			 .directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;

                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }]);

		function CustomerPortalController($scope, $http, CustomerDetails,$routeParams, InputFileDetails) {
		   	this.$scope = $scope;
				this.$http = $http;
        this.CustomerDetails = CustomerDetails;
        this.$routeParams = $routeParams;
				this.loading = true;
				this.InputFileDetails = InputFileDetails;
				// this.getCustomerDetails();
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
		    },
				processInput:function(){
					var self = this;
					console.log(self.fileObj, "self.fileObj");
					self.InputFileDetails.processFileInput(self.fileObj)
							.success(function(data) {
									console.log(data, "data");
									self.successMessage = data;

							})
							.error(function(error) {
								 console.log(error, "error");
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
