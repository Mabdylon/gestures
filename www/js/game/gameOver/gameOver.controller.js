gesturesApp.controller('game.gameOver.gameOver.controller', ['$state', 'scores.scores.service', function($state, scoresService){

    this.myScore = scoresService.getMyCurrentScore();

    this.goMenu = function() {
        scoresService.resetMyScore();
        $state.go('menu');
    };

}]);