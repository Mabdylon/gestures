"use strict";

gesturesApp.directive('gsChallenges', ['$ionicGesture', function($ionicGesture) {

        return {
            restrict: 'E',
            scope: {
                challenge: '=',
                onSuccess: '&',
                onFail: '&'
            },
            replace: true,
            template: '<div class="icon fill-content center"><div>',
            link: function($scope, $element, $attrs) {

                var checkEvent = function(e) {
                    if ($scope.challenge.isSuccess(e)) {
                        $scope.challenge.animations.success($element, e, $scope.onSuccess);
                    } else if($scope.challenge.isIgnore && $scope.challenge.isIgnore(e)) {

                    } else {
                        $scope.challenge.animations.fail($element, e, $scope.onFail);
                    }
                };

                $ionicGesture.on('tap', checkEvent, $element);
                $ionicGesture.on('doubletap', checkEvent, $element);
                $ionicGesture.on('swipe', checkEvent, $element);

                $scope.$watch('challenge', function(newValue, oldValue) {
                    if(!newValue) {
                        return;
                    }
                    if(oldValue) {
                        $element.removeClass(oldValue.icon);
                        $element.removeClass('translate');
                        $element.html('');
                    }
                    newValue.animations.start($element);
                    $element.addClass(newValue.icon);
                    $element.html(newValue.text);
                    $element.attr('style', newValue.style);
                    $element.addClass('translate');
                });
            }
        };

    }]);