gesturesApp.factory('game.challenges.arrows.services', ['$ionicGesture', '$window',
    function($ionicGesture, $window) {
        var self = this;

        self.values = {
            graphicsWhite: {
                up: {
                    condition: 'up',
                    gesture: 'swipe',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animate: {
                        y: - $window.screen.height,
                        x: 0
                    },
                    icon: 'ion-arrow-up-a'
                },
                down: {
                    condition: 'down',
                    gesture: 'swipe',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animate: {
                        y: $window.screen.height,
                        x: 0
                    },
                    icon: 'ion-arrow-down-a'
                },
                left: {
                    condition: 'left',
                    gesture: 'swipe',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animate: {
                        y: 0,
                        x: - $window.screen.width
                    },
                    icon: 'ion-arrow-left-a'
                },
                right: {
                    condition: 'right',
                    gesture: 'swipe',
                    style: {
                        color: 'white',
                        'font-size': '128px'
                    },
                    animate: {
                        y: 0,
                        x: $window.screen.width
                    },
                    icon: 'ion-arrow-right-a'
                }
            }
        };

        var graphicsBlack = angular.copy(self.values.graphicsWhite);
        for(var prop in graphicsBlack) {
            var challenge = graphicsBlack[prop];
            challenge.style.color = 'black';
            if(challenge.condition === 'right') {
                challenge.condition = 'left';
                continue;
            }
            if(challenge.condition === 'left') {
                challenge.condition = 'right';
                continue;
            }
            if(challenge.condition === 'up') {
                challenge.condition = 'down';
                continue;
            }
            if(challenge.condition === 'down') {
                challenge.condition = 'up';
                continue;
            }
        }
        self.values.graphicsBlack = graphicsBlack;



        var textsWhite = angular.copy(self.values.graphicsWhite);
        for(var prop in textsWhite) {
            var challenge = textsWhite[prop];
            delete challenge.icon;
            challenge.style['font-size'] = '64px';
            if(prop === 'up') {
                challenge.text = 'Up';
                continue;
            }
            if(prop === 'down') {
                challenge.text= 'Down';
                continue;
            }
            if(prop === 'left') {
                challenge.text= 'Left';
                continue;
            }
            if(prop === 'right') {
                challenge.text= 'Right';
                continue;
            }
        }
        self.values.textsWhite = textsWhite;

        var textsBlack = angular.copy(self.values.graphicsBlack);
        for(var prop in textsBlack) {
            var challenge = textsBlack[prop];
            delete challenge.icon;
            challenge.style['font-size'] = '64px';
            if(prop === 'up') {
                challenge.text = 'Up';
                continue;
            }
            if(prop === 'down') {
                challenge.text= 'Down';
                continue;
            }
            if(prop === 'left') {
                challenge.text= 'Left';
                continue;
            }
            if(prop === 'right') {
                challenge.text= 'Right';
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