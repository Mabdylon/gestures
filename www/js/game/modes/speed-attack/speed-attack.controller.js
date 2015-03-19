gesturesApp.controller('game.modes.speed-attack.speed-attack.service',
        ['$timeout', '$window', '$state', 'game.challenges.arrows.challenge.services', function($timeout, $window, $state, challengesService) {

                this.timer = $timeout(function() {
                    this.fail();
                }, 2000);

                this.success = function() {
                    $state.go('speed-attack.'+challengesService.getRandomChallenge().state)
                    $timeout.cancel(this.timer);
                    this.timer = $timeout(function() {
                        this.fail();
                    }, 2000);

                };

                this.fail = function() {
                    $window.history.back();
                };

            }]);