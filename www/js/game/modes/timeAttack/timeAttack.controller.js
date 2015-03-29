gesturesApp.controller('game.modes.timeAttack.timeAttack.controller',
        ['$window', 'game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope',
            function($window, modesService, $state, challengesService, $ionicGesture, $scope) {

                var self = this;
                self.gameBoardElement = angular.element(document.querySelector('#game-board'));
                self.challengeElement = angular.element(document.querySelector('#challenge-element'));
                modesService.setCurrentMode($state.current.name);

                self.time = 600;
                self.score = 0;
                self.fail = function() {
                    $state.go('game.over');
                };
                self.theme = modesService.getCurrentTheme();


                self.goNextLevel = function() {
                    self.score += 1;
                    $ionicGesture.off(gesture, 'swipe');
                    self.challenge = challengesService.getRandomChallenge();
                    move('#challenge-element')
                            .scale(1)
                            .end();
                    $scope.$apply();
                };

                self.animate = function(e) {
                    if (e.gesture.direction === self.challenge.condition) {
                        var speedFactor = (e.gesture.velocityX + e.gesture.velocityY) / 5;
                        move('#challenge-element')
                                .scale(0)
                                .duration((100 / speedFactor))
                                .x(self.challenge.animate.x)
                                .y(self.challenge.animate.y)
                                .ease('in')
                                .skew(100)
                                .rotate(360)
                                .end(self.goNextLevel);
                    } else {
                        move('#challenge-element')
                                .set('color', 'red')
                                .scale(20)
                                .ease('out')
                                .duration(500)
                                .ease()
                                .end(self.fail);
                    }
                };

                self.challenge = challengesService.getRandomChallenge();
                var gesture = $ionicGesture.on(self.challenge.gesture, self.animate, self.gameBoardElement);


            }]);