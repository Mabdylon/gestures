"use strict";

gesturesApp.controller('game.gameOver.gameOver.controller', ['$state', 'commons.scores.service', '$stateParams', 
    function($state, scoresService, $stateParams){

    this.myScore = scoresService.getMyCurrentScore();

    this.retry = function() {
        scoresService.resetMyScore();
        $state.go($stateParams.from);
    };

}]);