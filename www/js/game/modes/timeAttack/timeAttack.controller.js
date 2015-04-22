"use strict";

gesturesApp.controller('game.modes.timeAttack.timeAttack.controller',
        ['$window', 'game.modes.modes.service', '$state', 'game.challenges.challenges.services', '$ionicGesture', '$scope', 'commons.scores.service',
            function($window, modesService, $state, challengesService, $ionicGesture, $scope, scoresService) {

                var self = this;
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
                    self.scoreElement.removeClass('animated flip');
                    self.score = scoresService.addMyScore(1);
                    self.challenge = challengesService.getRandomChallenge();
                    self.scoreElement.addClass('animated flip');
                    $scope.$apply();
                };


                self.challenge = challengesService.getRandomChallenge();

            }]);