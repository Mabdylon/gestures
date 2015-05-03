"use strict";

gesturesApp.controller('game.game.controller', ['$state', '$scope', '$ionicModal', function($state, $scope, $ionicModal) {

        this.exit = function() {
            $scope.$broadcast('timer.stop');
            $state.go('menu');
        };

    }]);