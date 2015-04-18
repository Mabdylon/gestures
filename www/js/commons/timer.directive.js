gesturesApp.directive('timer', ['$timeout', '$interval', function($timeout, $interval) {
        return {
            restrict: 'EA',
            scope: {
                amount: '=amount',
                onTimeout: '&onTimeout'
            },
            controller: function($scope, $element) {

                $element.html($scope.amount);

                var startTimer = function() {
                    return $interval(function() {
                        $element.removeClass('translate');
                        if ($scope.amount <= 0) {
                            $scope.onTimeout();
                        }
                        $scope.amount -= 1;
                        $element.addClass('translate');
                        $element.html($scope.amount);
                    }, 1000, ($scope.amount+1), false);
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