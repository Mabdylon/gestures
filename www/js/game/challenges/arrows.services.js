gesturesApp.factory('game.challenges.arrows.services', ['$ionicGesture', '$window',
    function($ionicGesture, $window) {
        var self = this;

        var swipeGesture = function(id, onComplete) {
            var challengeElement = angular.element(document.querySelector(id));
            return $ionicGesture.on('swipe', onComplete, challengeElement);
        };

        var defaultAnimations = {
            onStart: function(id, event, onComplete) {
                angular.element(document.querySelector(id));
            },
            success: function(id, event, onComplete) {
                var speedFactor = (event.gesture.velocityX + event.gesture.velocityY) / 5;
                move(id)
                        .scale(0)
                        .duration(100)
                        .end(onComplete);
            },
            fail: function(id, event, onComplete) {
                move(id)
                        .set('color', 'red')
                        .scale(20)
                        .ease('out')
                        .duration(500)
                        .ease()
                        .end(onComplete);
            },
            end: function(id, event, onComplete) {
                move(id)
                        .scale(1)
                        .end();
            }
        };

        self.values = {
            graphicsWhite: {
                up: {
                    id: 'arrows-graphic-white-up',
                    gesture: 'swipe',
                    condition: 'up',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animations: defaultAnimations,
                    attachGesture: swipeGesture,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'up' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-up-a'
                },
                down: {
                    id: 'arrows-graphic-white-down',
                    gesture: 'swipe',
                    condition: 'down',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animations: defaultAnimations,
                    attachGesture: swipeGesture,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'down' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-down-a'
                },
                left: {
                    id: 'arrows-graphic-white-left',
                    gesture: 'swipe',
                    condition: 'left',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animations: defaultAnimations,
                    attachGesture: swipeGesture,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'left' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-left-a'
                },
                right: {
                    id: 'arrows-graphic-white-right',
                    gesture: 'swipe',
                    condition: 'right',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animations: defaultAnimations,
                    attachGesture: swipeGesture,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'right' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-right-a'
                }
            }
        };

        var graphicsBlack = angular.copy(self.values.graphicsWhite);
        for (var prop in graphicsBlack) {
            var challenge = graphicsBlack[prop];
            challenge.style.color = 'black';
            if (challenge.condition === 'right') {
                challenge.id = 'arrows-graphic-black-right';
                challenge.condition = 'left';
                challenge.isSuccess = function(event) {
                    return (event.gesture.direction === 'left' && event.type === 'swipe');
                };
                continue;
            }
            if (challenge.condition === 'left') {
                challenge.id = 'arrows-graphic-black-left';
                challenge.condition = 'right';
                challenge.isSuccess = function(event) {
                    return (event.gesture.direction === 'right' && event.type === 'swipe');
                };
                continue;
            }
            if (challenge.condition === 'up') {
                challenge.id = 'arrows-graphic-black-up';
                challenge.condition = 'down';
                challenge.isSuccess = function(event) {
                    return (event.gesture.direction === 'down' && event.type === 'swipe');
                };
                continue;
            }
            if (challenge.condition === 'down') {
                challenge.id = 'arrows-graphic-black-down';
                challenge.condition = 'up';
                challenge.isSuccess = function(event) {
                    return (event.gesture.direction === 'up' && event.type === 'swipe');
                };
                continue;
            }
        }
        self.values.graphicsBlack = graphicsBlack;



        var textsWhite = angular.copy(self.values.graphicsWhite);
        for (var prop in textsWhite) {
            var challenge = textsWhite[prop];
            delete challenge.icon;
            challenge.style['font-size'] = '64px';
            if (prop === 'up') {
                challenge.id = 'arrows-texts-white-up';
                challenge.text = 'Up';
                continue;
            }
            if (prop === 'down') {
                challenge.id = 'arrows-texts-white-down';
                challenge.text = 'Down';
                continue;
            }
            if (prop === 'left') {
                challenge.id = 'arrows-texts-white-left';
                challenge.text = 'Left';
                continue;
            }
            if (prop === 'right') {
                challenge.id = 'arrows-texts-white-right';
                challenge.text = 'Right';
                continue;
            }
        }
        self.values.textsWhite = textsWhite;

        var textsBlack = angular.copy(self.values.graphicsBlack);
        for (var prop in textsBlack) {
            var challenge = textsBlack[prop];
            delete challenge.icon;
            challenge.style['font-size'] = '64px';
            if (prop === 'up') {
                challenge.id = 'arrows-texts-black-up';
                challenge.text = 'Up';
                continue;
            }
            if (prop === 'down') {
                challenge.id = 'arrows-texts-black-down';
                challenge.text = 'Down';
                continue;
            }
            if (prop === 'left') {
                challenge.id = 'arrows-texts-black-left';
                challenge.text = 'Left';
                continue;
            }
            if (prop === 'right') {
                challenge.id = 'arrows-texts-black-right';
                challenge.text = 'Right';
                continue;
            }
        }
        self.values.textsBlack = textsBlack;

        return {
            getValues: function() {
                return self.values;
            }
        };

    }]);