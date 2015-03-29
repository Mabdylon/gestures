gesturesApp.factory('game.challenges.arrows.services', ['$ionicGesture', '$window',
    function($ionicGesture, $window) {
        var self = this;

        self.values = {
            graphics: {
                up: {
                    condition: 'up',
                    gesture: 'swipe',
                    animate: {
                        y: - $window.screen.height,
                        x: 0
                    },
                    icon: 'ion-arrow-up-a'
                },
                down: {
                    condition: 'down',
                    gesture: 'swipe',
                    animate: {
                        y: $window.screen.height,
                        x: 0
                    },
                    icon: 'ion-arrow-down-a'
                },
                left: {
                    condition: 'left',
                    gesture: 'swipe',
                    animate: {
                        y: 0,
                        x: - $window.screen.width
                    },
                    icon: 'ion-arrow-left-a'
                },
                right: {
                    condition: 'right',
                    gesture: 'swipe',
                    animate: {
                        y: 0,
                        x: $window.screen.width
                    },
                    icon: 'ion-arrow-right-a'
                }
            }
        };

        return {
            getValues: function() {
                return self.values;
            }
        };

    }]);