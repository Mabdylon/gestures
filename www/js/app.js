"use strict";

var gesturesApp = angular.module('gestures', ['ionic','ngCordova', 'LocalStorageModule', 'ngAnimate']);

gesturesApp.run(function($ionicPlatform, $anchorScroll) {

    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
