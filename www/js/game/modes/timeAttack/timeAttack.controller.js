gesturesApp.controller('game.modes.timeAttack.timeAttack.controller',
        ['$window', 'game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope', 'game.scores.scores.service',
            function($window, modesService, $state, challengesService, $ionicGesture, $scope, scoresService) {

                var self = this;
                self.$state = $state;
                var challengeElementId = '#challenge-element';
                self.scoreElement = angular.element(document.querySelector('#app-score'));

                modesService.setCurrentMode($state.current.name);

                
                self.time = 60;
                self.score = scoresService.resetMyScore();
                self.fail = function() {
                    self.$state.transitionTo('game.over');
                };
                self.theme = modesService.getCurrentTheme();


                self.goNextLevel = function() {
                    self.score = scoresService.addMyScore(1);
                    $ionicGesture.off(gesture, self.challenge.gesture);
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
                var gesture = self.challenge.attachGesture('#game-board', self.animate);
                

            }]);