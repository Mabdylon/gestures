gesturesApp.controller('game.challenges.graphicsArrows.graphicsArrows.controller', ['$stateParams', '$ionicGesture', 'game.modes.modes.service', '$cordovaVibration',
    function($stateParams, $ionicGesture, modesService, $cordovaVibration) {

        var self = this;
        var challengeContentElement = angular.element(document.querySelector('#challenge-content-element'));

        var success = function(e) {
            if (e.gesture.direction === challenge.name) {
                var speedFactor = (e.gesture.velocityX + e.gesture.velocityY);
//                        e.gesture.deltaTime / 50;
                move('#graphic-arrow')
                        .scale(1.5)
                        .duration(100/speedFactor)
                        .end(function() {
                            move('#graphic-arrow')
                                    .ease('snap')
                                    .x(challenge.animate.x)
                                    .y(challenge.animate.y)
                                    .duration(500/speedFactor)
                                    .end(function() {
                                        $ionicGesture.off(swipeGesture, 'swipe');
                                        modesService.success();
                                    });
                        });
            } else {
                move('#graphic-arrow')
                        .scale(1.2)
                        .set('color', 'red')
                        .duration(100)
                        .end(function() {
                            move('#graphic-arrow')
                            .scale(0.8)
                            .set('color', 'black')
                            .end();
                });
                if($cordovaVibration) {
                    $cordovaVibration.vibrate(100);
                }
            }
        };

        var values = {
            up: {
                text: 'Up',
                name: 'up',
                animate: {
                    x: 0,
                    y: -400
                },
                icon: 'ion-android-arrow-up'
            },
            down: {
                text: 'Down',
                name: 'down',
                animate: {
                    x: 0,
                    y: 400
                },
                icon: 'ion-android-arrow-down'
            },
            left: {
                text: 'Left',
                name: 'left',
                animate: {
                    x: -400,
                    y: 0
                },
                icon: 'ion-android-arrow-left'
            },
            right: {
                text: 'Right',
                name: 'right',
                animate: {
                    x: 400,
                    y: 0
                },
                icon: 'ion-android-arrow-right'
            }
        };

        var challenge = values[$stateParams.challengeValue];
        this.graphicsArrows = challenge;
        var swipeGesture = $ionicGesture.on('swipe', success, challengeContentElement);

    }]);