"use strict";

gesturesApp.controller('game.game.controller', ['$state', '$scope', '$ionicModal', function($state, $scope, $ionicModal) {

        this.exit = function() {
            $scope.$broadcast('timer.stop');
            $state.go('menu');
        };

        this.pause = function() {
            $scope.$broadcast('timer.pause');
            $ionicModal.fromTemplateUrl('js/game/modals/pause/pause.view.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };
        
        $scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove();
                $scope.$broadcast('timer.resume');
	};


    }]);