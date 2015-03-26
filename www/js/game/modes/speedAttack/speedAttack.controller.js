gesturesApp.controller('game.modes.speedAttack.speedAttack.controller',
        ['$timeout', '$window', '$state', 'game.challenges.challenges.services', '$stateParams', 'game.modes.modes.service',
            function($timeout, $window, $state, challengesService, $stateParams, modesService) {

                var self = this;
                modesService.setCurrentMode(this);
                this.level = $stateParams.modeValue;

//                this.timer = $timeout(function() {
//                        self.fail();
//                }, 5000);

                this.success = function() {
                    $stateParams.modeValue = self.addToLevel(1);
//                    $timeout.cancel(self.timer);
//                    self.timer = $timeout(function() {
//                        self.fail();
//                    }, 5000);
                    self.goNextLevel();
                };

                this.goNextLevel = function() {
                    challengesService.goToRandomChallenge($stateParams);
                };

                this.addToLevel = function(numberToAdd) {
                    var intCurrentLevel = parseInt($stateParams.modeValue);
                    intCurrentLevel += numberToAdd;
                    return intCurrentLevel.toString();
                };


                this.fail = function() {
                    if($stateParams.modeValue === '0') {
                        $state.go('game.over');
                        return;
                    }
                    $stateParams.modeValue = self.addToLevel(-1);
                    $window.history.back();
                };

                self.goNextLevel();

            }]);