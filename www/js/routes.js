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

            .state('game.timeAttack', {
                url: '/timeAttack',
                templateUrl: 'js/game/modes/timeAttack/timeAttack.view.html',
                controller: 'game.modes.timeAttack.timeAttack.controller as timeAttackCtrl'
            })

            .state('game.story', {
                url: '/story/:level',
                templateUrl: 'js/game/modes/story/story.view.html',
                controller: 'game.modes.story.story.controller as storyCtrl'
            })

            .state('game.levels', {
                url: '/levels',
                templateUrl: 'js/game/levels/levels.view.html',
                controller: 'game.levels.levels.controller as levelsCtrl'
            })


            .state('game.over', {
              url: '/gameOver',
              controller: 'game.gameOver.gameOver.controller as gameOverCtrl',
              templateUrl: 'js/game/gameOver/GameOver.view.html'
            });

});