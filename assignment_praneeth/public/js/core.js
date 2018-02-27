
 'use strict';

 var customerPortal = angular.module('customerInteractionsApp', [
     'ngRoute',
     'customerService',
     'inputObjService'
     // 'ui.router'
    //  'ngAnimate'
 ]);
 customerPortal.
       config(['$routeProvider','$locationProvider', function ($routeProvider , $locationProvider) {
            // $routeProvider.caseInsensitiveMatch = true;
             $routeProvider
                 .when("/", {
                     templateUrl : "../appPages/welcome.html"
                 })
                 .when("/customerLogin", {
                     templateUrl : "../appPages/customer-login.html",
                     controller  : "CustomerLoginController",
                     controllerAs: "vmLogin"
                     // ,
                     // authorize: true
                 })
                 .when("/customerPortal", {
                     templateUrl : "../appPages/customer-portal.html",
                     controller  : "CustomerPortalController",
                     controllerAs: "vmPortal"
                     // ,
                     // authorize: true
                 })
                 .when("/customerFeedback", {
                     templateUrl : "../appPages/customer-feedback.html",
                     controller  : "CustomerFeedbackController",
                     controllerAs: "vmFeedback"
                     // ,
                     // authorize: true
                 })
                 // .when("/customerDetails", {
                 //     templateUrl : "../appPages/customer-details.html"
                 // })

                 $locationProvider.html5Mode(true);

       }]);
