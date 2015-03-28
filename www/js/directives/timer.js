gesturesApp.directive('timer', ['$timeout', function($timeout) {
        return {
            restrict: 'EA',
            scope: {
                amount: '=amount',
                onTimeout: '&onTimeout'
            },
            template: '<div id="timer"></div>',
            controller: function($scope) {
                var timerElement = document.getElementById('timer');
                var initial = $scope.amount;

                var startTimeout = function() {
                    $timeout(function() {
                        $scope.onTimeout();
                    }, ($scope.amount * 1000));
                };
                var updateTime = function() {
                    timerElement.innerHTML = $scope.amount.toFixed(1);
                };

                var timer = startTimeout($scope.amount);
                var tween = TweenLite.to($scope, initial, {amount: 0, onUpdate: updateTime});

                $scope.$on('game.pause', function() {
                    tween.pause();
                    $timeout.cancel(timer);
                });

                $scope.$on('game.resume', function() {
                    startTimeout($scope.amount);
                    tween.resume();
                });

                $scope.$on(
                        "$destroy",
                        function(event) {

                            $timeout.cancel(timer);

                        }
                );

            }

        };
    }]);