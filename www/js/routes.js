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
                cache: false,
                controller: 'menu.menu.controller as menuCtrl'
            })
            
            .state('game', {
                url: '/game',
                controller: 'game.game.controller as gameCtrl',
                cache: false,
                template: '<ui-view></ui-view>'
            })

            .state('game.timeAttack', {
                url: '/timeAttack',
                templateUrl: 'js/game/modes/timeAttack/timeAttack.view.html',
                cache: false,
                controller: 'game.modes.timeAttack.timeAttack.controller as timeAttackCtrl'
            })

            .state('game.story', {
                url: '/story/:level',
                templateUrl: 'js/game/modes/story/story.view.html',
                cache: false,
                controller: 'game.modes.story.story.controller as storyCtrl'
            })

            .state('game.levels', {
                url: '/levels',
                templateUrl: 'js/game/levels/levels.view.html',
                cache: false,
                controller: 'game.levels.levels.controller as levelsCtrl'
            })


            .state('game.over', {
              url: '/gameOver',
              controller: 'game.gameOver.gameOver.controller as gameOverCtrl',
              cache: false,
              templateUrl: 'js/game/gameOver/GameOver.view.html'
            });

});