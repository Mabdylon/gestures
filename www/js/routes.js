gesturesApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/menu');
    //
    // Now set up the states
    $stateProvider
            .state('menu', {
                url: '/menu',
                templateUrl: 'js/menu/menu.view.html',
                controller: 'menu.menu.controller as menuCtrl'
            })
            
            .state('game', {
                url: '/game',
                controller: 'game.game.controller as gameCtrl',
                template: '<ui-view></ui-view>'
            })

            .state('game.mode', {
                url: '/mode/:modeState/:modeValue',
                templateUrl: function($stateParams)
                {
                    return 'js/game/modes/' + $stateParams.modeState + '/'
                            + $stateParams.modeState + '.view.html';
                },
                controllerProvider: ['$stateParams', function($stateParams) {
                    return 'game.modes.' + $stateParams.modeState + '.' +
                                        $stateParams.modeState + '.controller as '+ $stateParams.modeState +'Ctrl';
                }]
            })

            .state('game.mode.challenge', {
                url: '/challenge/:challengeState/:challengeValue',
                templateUrl: function($stateParams)
                {
                    return 'js/game/challenges/' + $stateParams.challengeState + '/'
                            + $stateParams.challengeState + '.view.html';
                },
                controllerProvider: ['$stateParams', function($stateParams) {
                    return 'game.challenges.' + $stateParams.challengeState + '.'
                            + $stateParams.challengeState + '.controller as '+ $stateParams.challengeState +'Ctrl';
                }]
            })

            .state('game.over', {
              url: '/gameOver',
              controller: 'game.gameOver.gameOver.controller as gameOverCtrl',
              templateUrl: 'js/game/gameOver/GameOver.view.html'
            });

});