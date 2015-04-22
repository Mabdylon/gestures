"use strict";

gesturesApp.controller('game.levels.levels.controller',
        ['$state', 'game.levels.levels.service', 'game.modes.modes.service', 'commons.unlocker.service', '$anchorScroll', '$location',
            function($state, levelsService, modesService, unlockerService, $anchorScroll, $location) {

                var self = this;
                modesService.setCurrentMode($state.current.name);
                this.mode = modesService.getCurrentMode();
                this.unlockedLevels = unlockerService.getUnlockedLevels();
                this.progress = unlockerService.getPercentLevelUnlocked();
                this.levels = levelsService.getList();
                this.currentLevel = unlockerService.getCurrentLevel();

                this.isCurrentLevel = function(level){
                    return (level.id === self.currentLevel.id);
                };

                var gotoAnchor = function(id) {
                    if ($location.hash() !== id) {
                        $location.hash(id);
                    } else {
                        $anchorScroll();
                    }
                };

                this.goToLevel = function(level) {
                    $state.go('game.story', {
                        level: level.id
                    });
                };

                gotoAnchor(self.currentLevel.id);

            }]);