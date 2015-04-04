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
                    return $timeout(function() {
                        $scope.onTimeout();
                    }, ($scope.amount * 1000)); 
                };
                var updateTime = function() {
                    timerElement.innerHTML = $scope.amount.toFixed(1);
                };

                var timer = startTimeout($scope.amount);
                var tween = TweenLite.to($scope, initial, {amount: 0, onUpdate: updateTime});

                $scope.$on('timer.pause', function() {
                    tween.pause();
                    $timeout.cancel(timer);
                });

                $scope.$on('timer.resume', function() {
                    startTimeout($scope.amount);
                    tween.resume();
                });

                $scope.$on('timer.stop', function() {
                    $timeout.cancel(timer);
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