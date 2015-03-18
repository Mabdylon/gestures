gesturesApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/menu");
  //
  // Now set up the states
  $stateProvider
    .state('menu', {
      url: "/menu",
      templateUrl: "js/menu/menu.html",
      controller: "menu.controller"
    });
    
});