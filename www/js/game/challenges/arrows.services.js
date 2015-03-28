gesturesApp.factory('game.challenges.arrows.services', ['$ionicGesture', '$window',
    function($ionicGesture, $window) {
        var self = this;

        self.values = {
            graphics: {
                up: {
                    condition: 'up',
                    gesture: 'swipe',
                    animate:{
                        css: {
                            top: "+=500px"
                        },
                        ease:Linear.easeNone
                    },
                    icon: 'ion-arrow-up-a'
                },
                down: {
                    condition: 'down',
                    gesture: 'swipe',
                    animate: {
                        css: {
                            bottom: "+=550px"
                        },
                        ease:Linear.easeNone
                    },
                    icon: 'ion-arrow-down-a'
                },
                left: {
                    condition: 'left',
                    gesture: 'swipe',
                    animate: {
                        css: {
                            left: "+=550px"
                        },
                        ease:Linear.easeNone
                    },
                    icon: 'ion-arrow-left-a'
                },
                right: {
                    condition: 'right',
                    gesture: 'swipe',
                    animate: {
                        css: {
                            right: "+=550px"
                        },
                        ease:Linear.easeNone
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