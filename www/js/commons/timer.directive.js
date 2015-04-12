gesturesApp.directive('timer', ['$timeout', '$interval', function($timeout, $interval) {
        return {
            restrict: 'EA',
            scope: {
                amount: '=amount',
                onTimeout: '&onTimeout'
            },
            template: '<div id="timer"></div>',
            controller: function($scope, $element) {

                var startTimer = function() {
                    return $interval(function() {
                        if ($scope.amount <= 0) {
                            $scope.onTimeout();
                        }
                        $scope.amount -= 1;
                        $element.html($scope.amount);
                    }, 1000, $scope.amount);
                };

                var interval = startTimer();

                $scope.$on('timer.pause', function() {
                    $interval.cancel(interval);
                });

                $scope.$on('timer.resume', function() {
                    interval = startTimer();
                });

                $scope.$on('timer.stop', function() {
                    $interval.cancel(interval);
                });

                $scope.$on(
                        "$destroy",
                        function(event) {

                            $interval.cancel(interval);

                        }
                );

            }

        };
    }]);