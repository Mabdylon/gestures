gesturesApp.controller('game.levels.levels.controller',
        ['$state', 'game.levels.levels.service', 'game.modes.modes.service',
            function($state, levelsService, modesService) {

                var self = this;
                modesService.setCurrentMode($state.current.name);
                self.theme = modesService.getCurrentTheme();

                this.levels = levelsService.getList();

                this.goToLevel = function(level) {
                  $state.go('game.story', {
                     level: level.id
                  });
                };


            }]);