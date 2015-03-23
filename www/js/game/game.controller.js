gesturesApp.controller('game.game.controller', ['$state', function($state) {

    this.game = {
        exit: function() {
            $state.go('menu');
        }
    };

}]);