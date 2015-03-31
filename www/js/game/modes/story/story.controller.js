gesturesApp.controller('game.modes.story.story.controller',
        ['game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope', 'scores.scores.service', 'game.levels.levels.service', '$stateParams',
            function(modesService, $state, challengesService, $ionicGesture, $scope, scoresService, levelsService, $stateParams) {

                var self = this;
                var challengeElementId = '#challenge-element';
                self.level = levelsService.getLevelById($stateParams.level);
                self.challengesId = self.level.challenges;
                self.step = 0;

                self.fail = function() {
                };

                self.goNextLevel = function() {
                    $ionicGesture.off(gesture, self.challenge.gesture);
                    self.step += 1;
                    self.challenge = challengesService.getChallengeById(self.challengesId[self.step]);
                    self.challenge.animations.end(challengeElementId);
                    $scope.$apply();
                };

                self.animate = function(e) {
                    if (self.challenge.isSuccess(e)) {
                        self.challenge.animations.success('#challenge-element', e, self.goNextLevel);
                    } 
                };

                self.challenge = challengesService.getChallengeById(self.challengesId[self.step]);
                var gesture = self.challenge.attachGesture('#game-board', self.animate);
                

            }]);