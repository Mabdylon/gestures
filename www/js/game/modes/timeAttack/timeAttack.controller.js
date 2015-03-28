gesturesApp.controller('game.modes.timeAttack.timeAttack.controller',
        ['$window', 'game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope',
            function( $window, modesService, $state, challengesService, $ionicGesture, $scope) {

                var self = this;
                self.gameBoardElement = angular.element(document.querySelector('#game-board'));
                self.challengeElement = document.getElementById('challenge-element');
                modesService.setCurrentMode($state.current.name);

                self.time = 60;
                self.score = 0;
                self.fail = function() {
                    $state.go('game.over');
                };
                self.theme = modesService.getCurrentTheme();


                self.goNextLevel = function() {
                    self.score += 1;
                    $ionicGesture.off(gesture, 'swipe');
                    self.challenge = challengesService.getRandomChallenge();
                    $scope.$apply();
                };

                self.animate = function(e) {
                    if(e.gesture.direction === self.challenge.condition) {
                        var animate = self.challenge.animate;
                        animate.onComplete = self.goNextLevel;
                        TweenLite.to(self.challengeElement, 0, animate);
                    } else {
                        self.fail();
                    }
                };

                self.challenge = challengesService.getRandomChallenge();
                var gesture = $ionicGesture.on(self.challenge.gesture, self.animate, self.gameBoardElement);


            }]);