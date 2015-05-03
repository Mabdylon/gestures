gesturesApp.directive('gsBackButton', ['$window', function($window) {
        return {
            restrict: 'EA',
            replace: true,
            template: '<button class="button button-clear gesture-back-button icon ion-close-round" ng-click="goBack()"></button>',
            link: function(scope) {
                scope.goBack = function() {
                    scope.$broadcast('timer.stop');
                    $window.history.back();
                };
            }
        };
    }]);