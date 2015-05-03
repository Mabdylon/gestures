gesturesApp.directive('gsPauseButton', ['$ionicModal', function($ionicModal) {
        return {
            restrict: 'EA',
            replace: true,
            template: '<button class="button button-clear gesture-pause-button icon ion-ios-pause" ng-click="pause()"></button>',
            link: function(scope) {
                scope.pause = function() {
                    scope.$broadcast('timer.pause');
                    $ionicModal.fromTemplateUrl('js/game/modals/pause/pause.view.html', {
                        scope: scope,
                        animation: 'fade-in'
                    }).then(function(modal) {
                        scope.modal = modal;
                        scope.modal.show();
                    });
                };

                scope.closeModal = function() {
                    scope.modal.hide();
                    scope.modal.remove();
                    scope.$broadcast('timer.resume');
                };
            }
        };
    }]);