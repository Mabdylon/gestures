gesturesApp.controller('menu.menu.controller', ['game.modes.modes.service', function(modesService) {

    this.modes = modesService.getList();

}]);