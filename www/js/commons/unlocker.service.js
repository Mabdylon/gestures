gesturesApp.factory('commons.unlocker.service', ['commons.utils.service', 'game.levels.levels.service', 'localStorageService',
    function(utilsService, levelsService, localStorageService) {

        var self = this;
        var levels = levelsService.getList();
        var keyUnlockLevels = 'unlock.levels';

        var getNbUnlockedLevels = function() {
            return _.filter(self.unlock.levels, {unlocked: true}).length;
        };

        self.unlock = {
            levels: utilsService.initOrLoadObjectValue(keyUnlockLevels)
        };

        _.forEach(levels, function(level) {
            if (!self.unlock.levels[level.id]) {
                self.unlock.levels[level.id] = {
                    unlocked: false,
                    stars: 0
                };
            }
        });

        self.unlock.levels[1].unlocked = true;

        return {
            getUnlockedLevels: function() {
                return self.unlock.levels;
            },
            isUnlockedLevel: function(id) {
                return self.levels[id].unlocked;
            },
            getNbUnlockedLevels: getNbUnlockedLevels,
            getPercentLevelUnlocked: function() {
                var ratio = ((getNbUnlockedLevels() - 1) / _.size(self.unlock.levels));
                var percent = (ratio * 100).toFixed(0);
                return percent;
            },
            unlockNextLevel: function(currentLevel) {
                var nextLevel = currentLevel + 1;
                if (self.unlock.levels[nextLevel]) {
                    self.unlock.levels[nextLevel].unlocked = true;
                    localStorageService.set(keyUnlockLevels, self.unlock.levels);
                }
            }
        };

    }]);