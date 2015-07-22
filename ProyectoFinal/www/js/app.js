// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var mod = angular.module('App', ['ionic','firebase']);

var fb = null;

mod.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html'
    })

    .state('config', {
      url: '/config',
      controller: 'ConfigController',
      templateUrl: 'views/config/config.html'
    })
    .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'views/login/login.html'
    })
    .state('user', {
        url: '/user',
        controller: 'UserController',
        templateUrl: 'views/user/user.html'
    })
    .state('registro', {
        url: '/registro',
        controller: 'RegistroController',
        templateUrl: 'views/registro/registro.html'
    })    
    .state('resumen', {
        url: '/resumen',
        controller: 'ResumenController',
        templateUrl: 'views/resumen/resumen.html'
    })     
        .state('user_edit', {
        url: '/user_edit',
        controller: 'UserEditController',
        templateUrl: 'views/user_edit/user_edit.html'
    });
  
  $urlRouterProvider.otherwise('/login');

})

mod.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    fb = new Firebase("https://vivid-inferno-5814.firebaseio.com/users");
  });
});
