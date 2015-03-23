gesturesApp.controller('game.gameOver.gameOver.controller', ['$state', function($state){

    this.goMenu = function() {
        $state.go('menu');
    };

}]);