"use strict";

gesturesApp.controller('game.levels.levels.controller',
        ['$state', 'game.levels.levels.service', 'game.modes.modes.service', 'commons.unlocker.service',
            function($state, levelsService, modesService, unlockerService) {

                var self = this;
                modesService.setCurrentMode($state.current.name);
                this.mode = modesService.getCurrentMode();
                this.unlockedLevels = unlockerService.getUnlockedLevels();
                this.progress = unlockerService.getPercentLevelUnlocked();
                this.levels = levelsService.getList();
                this.currentLevel = levelsService.getLevelById(unlockerService.getCurrentLevelId());

                this.isCurrentLevel = function(level){
                    return (level.id === self.currentLevel.id);
                };

                this.scrollToCurrentLevel = function() {
                    var offset = 150;
                    var scroll = (self.currentLevel.number * 84);
                    var diff = scroll - offset;
                    return (diff > 0 ? diff : 0);
                };

                this.goToLevel = function(level) {
                    $state.go('game.story', {
                        level: level.id
                    });
                };

            }]);