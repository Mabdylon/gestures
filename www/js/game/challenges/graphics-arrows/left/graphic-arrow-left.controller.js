gesturesApp.controller('game.challenges.graphics-arrows.bottom.graphic-arrow-left.controller',
['game.modes.modes.service' ,function(modesService) {

    this.succes = function() {
      modesService.getCurrentMode().succes();
    };

    this.fail = function() {
        modesService.getCurrentMode().fail();
    };

}]);