
 'use strict';

 var customerPortal = angular.module('customerInteractionsApp', [
     'ngRoute',
     'customerService'
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
                     controllerAs: "vmLogin",
                     requireAuth: true
                 })
                 .when("/customerPortal", {
                     templateUrl : "../appPages/customer-portal.html",
                     controller  : "CustomerPortalController",
                     controllerAs: "vmPortal",
                     requireAuth: true
                 })
                 .when("/customerFeedback", {
                     templateUrl : "../appPages/customer-feedback.html",
                     controller  : "CustomerFeedbackController",
                     controllerAs: "vmFeedback",
                     requireAuth: true
                 })
                 .when("/customerDetails", {
                     templateUrl : "../appPages/customer-details.html"
                 })

                 $locationProvider.html5Mode(true);

       }]);
