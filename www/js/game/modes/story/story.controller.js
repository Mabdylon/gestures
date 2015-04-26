"use strict";

gesturesApp.controller('game.modes.story.story.controller',
        ['game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope', 'commons.scores.service', 'game.levels.levels.service', '$stateParams', 'commons.unlocker.service', 'commons.animatecss.service', '$timeout', '$ionicModal',
            function(modesService, $state, challengesService, $ionicGesture, $scope, scoresService, levelsService, $stateParams, unlockerService, animationcssService, $timeout, $ionicModal) {

                $ionicModal.fromTemplateUrl('./js/game/modes/story/hints/hints.modal.html', {
                    scope: $scope
                }).then(function(modal) {
                    self.modal = modal;
                    self.modal.show();
                });

                var self = this;
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
                    if (!self.challenge) {
                        animationcssService.animate('#app-score', 'hinge', 1, self.endLevel);
                        return;
                    }
                };

                self.challenge = challengesService.getChallengeById(self.challengesId[self.step]);

                self.computeProgress();

            }]);