"use strict";

gesturesApp.config(function(localStorageServiceProvider) {

   localStorageServiceProvider.setPrefix('gestures');
   localStorageServiceProvider.setStorageCookieDomain('gestures-app.com');

});