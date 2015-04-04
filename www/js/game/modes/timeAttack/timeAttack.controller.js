gesturesApp.controller('game.modes.timeAttack.timeAttack.controller',
        ['$window', 'game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope', 'commons.scores.service',
            function($window, modesService, $state, challengesService, $ionicGesture, $scope, scoresService) {

                var self = this;
                var challengeElementId = '#challenge-element';
                self.scoreElement = angular.element(document.querySelector('#app-score'));

                modesService.setCurrentMode($state.current.name);


                self.time = 30;
                self.score = scoresService.resetMyScore();
                self.fail = function() {
                    $scope.$broadcast('timer.stop');
                    $state.go('game.over', {
                        from: $state.current.name
                    });
                };
                self.mode = modesService.getCurrentMode();


                self.goNextLevel = function() {
                    self.score = scoresService.addMyScore(1);
                    self.challenge = challengesService.getRandomChallenge();
                    self.scoreElement.addClass('animated flip');
                    self.challenge.animations.end(challengeElementId);
                    $scope.$apply();
                };

                self.animate = function(e) {
                    if (self.challenge.isSuccess(e)) {
                        self.scoreElement.removeClass('animated flip');
                        self.challenge.animations.success('#challenge-element', e, self.goNextLevel);
                    } else {
                        self.challenge.animations.fail(challengeElementId, e, self.fail);
                    }
                };

                self.challenge = challengesService.getRandomChallenge();

                var challengeElement = angular.element(document.querySelector('#game-board'));
                $ionicGesture.on('hold', self.animate, challengeElement);
                $ionicGesture.on('doubletap', self.animate, challengeElement);
                $ionicGesture.on('swipe', self.animate, challengeElement);


            }]);