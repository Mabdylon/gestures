gesturesApp.factory('game.challenges.arrows.services', ['$ionicGesture', '$window', 'commons.animatecss.service',
    function($ionicGesture, $window, animatecssService) {
        var self = this;

        var defaultAnimations = {
            start: function(element, event, onComplete) {
                animatecssService.animate(element, 'zoomIn', 0.1, onComplete);
            },
            success: function(element, event, onComplete) {
                var speedFactor = (event.gesture.velocityX + event.gesture.velocityY) / 5;
                animatecssService.animate(element, 'zoomOut', 0.1, onComplete);
            },
            fail: function(element, event, onComplete) {
                animatecssService.animate(element, 'wobble', 0.5, onComplete);
            }
        };

        self.values = {
            graphicsWhite: {
                up: {
                    id: 'arrows-graphic-white-up',
                    gesture: 'swipe',
                    condition: 'up',
                    style: "color: white;font-size: 128px;",
                    animations: defaultAnimations,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'up' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-up-a'
                },
                down: {
                    id: 'arrows-graphic-white-down',
                    gesture: 'swipe',
                    condition: 'down',
                    style: "color: white;font-size: 128px;",
                    animations: defaultAnimations,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'down' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-down-a'
                },
                left: {
                    id: 'arrows-graphic-white-left',
                    gesture: 'swipe',
                    condition: 'left',
                    style: "color: white;font-size: 128px;",
                    animations: defaultAnimations,
                    isSuccess: function(event) {
                        return (event.gesture.direction === 'left' && event.type === 'swipe');
                    },
                    icon: 'ion-arrow-left-a'
                },
                right: {
                    id: 'arrows-graphic-white-right',
                    gesture: 'swipe',
                    condition: 'right',
                    style: "color: white;font-size: 128px;",
                    animations: defaultAnimations,
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
            challenge.style = "color: black;font-size: 128px;";
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
            challenge.style = "color: white;font-size: 64px;";
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
            challenge.style = "color: black;font-size: 64px;";
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