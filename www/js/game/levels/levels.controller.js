gesturesApp.controller('game.levels.levels.controller',
        ['$state', 'game.levels.levels.service', 'game.modes.modes.service', 'commons.unlocker.service',
            function($state, levelsService, modesService, unlockerService) {

                var self = this;
                modesService.setCurrentMode($state.current.name);
                this.mode = modesService.getCurrentMode();
                this.unlockedLevels = unlockerService.getUnlockedLevels();
                this.progress = unlockerService.getPercentLevelUnlocked();
                this.levels = levelsService.getList();

                this.goToLevel = function(level) {
                  $state.go('game.story', {
                     level: level.id
                  });
                };


            }]);