gesturesApp.factory('game.challenges.circles.services', ['$ionicGesture', '$window',
    function($ionicGesture, $window) {

        var self = this;
        self.circles = {
        };

        var defaultAnimations = {
            onStart: function(id, event, onComplete) {
                angular.element(document.querySelector(id));
            },
            success: function(id, event, onComplete) {
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

        self.circles.holdCircleWhite = {
            id: 'circle-hold-white',
            gesture: 'hold',
            condition: 'hold',
            animations: defaultAnimations,
            style: {
                color: 'white',
                'font-size': '128px'
            },
            isSuccess: function(event) {
                return (event.type === 'hold');
            },
            icon: 'ion-ios-circle-filled'
        };

        self.circles.doubleTapCircleWhite = {
            id: 'circle-doubletap-white',
            gesture: 'doubletap',
            condition: 'doubletap',
            animations: defaultAnimations,
            style: {
                color: 'white',
                'font-size': '128px'
            },
            isSuccess: function(event) {
                return (event.type === 'doubletap');
            },
            icon: 'ion-disc'
        };

        return {
            getValues: function() {
                return self.circles;
            }
        };

    }]);