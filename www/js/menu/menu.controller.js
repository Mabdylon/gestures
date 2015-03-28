gesturesApp.controller('menu.menu.controller',
        ['game.modes.modes.service', '$state', function(modesService, $state) {

                this.modes = modesService.getList();

                this.goToMode = function(mode) {
                    $state.go(mode.state);
                };

            }]);