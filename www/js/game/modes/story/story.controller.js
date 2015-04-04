gesturesApp.controller('game.modes.story.story.controller',
        ['game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope', 'commons.scores.service', 'game.levels.levels.service', '$stateParams', 'commons.unlocker.service', 'commons.animatecss.service',
            function(modesService, $state, challengesService, $ionicGesture, $scope, scoresService, levelsService, $stateParams, unlockerService, animationcssService) {

                var self = this;
                var challengeElementId = '#challenge-element';
                self.level = levelsService.getLevelById($stateParams.level);
                self.challengesId = self.level.challenges;
                self.nbChallenge = self.challengesId.length;
                self.step = 0;

                self.computeProgress = function() {
                    self.progress = ((self.step / (self.nbChallenge)) * 100).toFixed(0);
                };

                self.fail = function() {
                };

                self.endLevel = function() {
                    unlockerService.unlockNextLevel(self.level.id);
                    $state.go('game.storyOver', {
                       level: (self.level.id + 1)
                    });
                };

                self.goNextLevel = function() {
                    self.step += 1;
                    self.computeProgress();
                    self.challenge = challengesService.getChallengeById(self.challengesId[self.step]);
                    $scope.$apply();
                    if(!self.challenge){
                        animationcssService.animate('#app-score', 'hinge', self.endLevel);
                        return;
                    }
                    self.challenge.animations.end(challengeElementId);
                };

                self.animate = function(e) {
                    if (self.challenge.isSuccess(e)) {
                        self.challenge.animations.success('#challenge-element', e, self.goNextLevel);
                    } 
                };

                self.challenge = challengesService.getChallengeById(self.challengesId[self.step]);

                var challengeElement = angular.element(document.querySelector('#game-board'));
                $ionicGesture.on('hold', self.animate, challengeElement);
                $ionicGesture.on('doubletap', self.animate, challengeElement);
                $ionicGesture.on('swipe', self.animate, challengeElement);
                
                self.computeProgress();

            }]);