"use strict";

gesturesApp.factory('game.challenges.circles.services', ['$ionicGesture', '$window', 'commons.animatecss.service',
    function($ionicGesture, $window, animatecssService) {

        var self = this;
        self.circles = {
        };

        var defaultAnimations = {
            start: function(element, event, onComplete) {
                animatecssService.animate(element, 'zoomIn', 0.3, onComplete);
            },
            success: function(element, event, onComplete) {
                var speedFactor = (event.gesture.velocityX + event.gesture.velocityY) / 5;
                animatecssService.animate(element, 'zoomOut', 0.3, onComplete);
            },
            fail: function(element, event, onComplete) {
                animatecssService.animate(element, 'wobble', 0.5, onComplete);
            }
        };

        self.circles.holdCircleWhite = {
            id: 'circle-hold-white',
            gesture: 'tap',
            condition: 'tap',
            animations: defaultAnimations,
            style: "color: white;font-size: 128px;",
            isSuccess: function(event) {
                return (event.type === 'tap');
            },
            icon: 'ion-ios-circle-filled'
        };

        self.circles.doubleTapCircleWhite = {
            id: 'circle-doubletap-white',
            gesture: 'doubletap',
            condition: 'doubletap',
            animations: defaultAnimations,
            style: "color: white;font-size: 128px;",
            isSuccess: function(event) {
                return (event.type === 'doubletap');
            },
            isIgnore: function(event) {
                return (event.type === 'tap');
            },
            icon: 'ion-disc'
        };

        return {
            getValues: function() {
                return self.circles;
            }
        };

    }]);