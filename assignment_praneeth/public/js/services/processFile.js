angular.module('inputObjService', [])

	// each function returns a promise object
	.factory('InputFileDetails', ['$http',function($http) {
		return {
			processFileInput : function(inputObj) {
          console.log(inputObj, "inputObj");

          // data = $.param({grant_type:"password",username : userName,
          // password : password}),
          var contentType = '', data = "" , config={};
          if(inputObj.textInput){
            contentType = 'text/html; charset=utf-8' ;
            data = {
              upload: inputObj.textInput
            };
            config = {
                  headers : {
                      'Content-Type':contentType
                  }
            };
          }
          else{
            var fd = new FormData();
                fd.append('file', inputObj.fileInput);
              contentType = undefined ;
              data = fd;
              config = {
                  transformRequest: angular.identity,
                    headers : {
                        'Content-Type':contentType
                    }
              };
          }

          var url = '/api/file-handler';

          return $http.post(url, data, config)
			}
		}
	}]);
