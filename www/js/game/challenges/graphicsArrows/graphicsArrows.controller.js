gesturesApp.controller('game.challenges.graphicsArrows.graphicsArrows.controller', ['$stateParams', '$ionicGesture', 'game.modes.modes.service',
    function($stateParams, $ionicGesture, modesService) {

        var self = this;
        var challengeContentElement = angular.element(document.querySelector('#challenge-content-element'));
        var graphicArrowElement = angular.element(document.querySelector('#graphic-arrow'));

        var success = function(e) {
            console.log(e);
            window.requestAnimationFrame(function() {
                self._doDrag(e);
                return 24;
            });
            if (e.gesture.distance > 150) {
                $ionicGesture.off(this.currentAction);
                modesService.success();
            }
        };

        this._doDrag = function(e) {
            graphicArrowElement[0].style[ionic.CSS.TRANSFORM] = 'translate3d(' + e.gesture.deltaX * 3 + 'px, ' + e.gesture.deltaY * 3 + 'px, 0)';
        };

        var values = {
            up: {
                text: 'Up',
                icon: 'ion-android-arrow-up',
                action: function() {
                    return $ionicGesture.on('dragup', success, challengeContentElement);
                }
            },
            down: {
                text: 'Down',
                icon: 'ion-android-arrow-down',
                action: function() {
                    return $ionicGesture.on('dragdown', success, challengeContentElement);
                }
            },
            left: {
                text: 'Left',
                icon: 'ion-android-arrow-left',
                action: function() {
                    return $ionicGesture.on('dragleft', success, challengeContentElement);
                }
            },
            right: {
                text: 'Right',
                icon: 'ion-android-arrow-right',
                action: function() {
                    return $ionicGesture.on('dragright', success, challengeContentElement);
                }
            }
        };

        var challenge = values[$stateParams.challengeValue];

        this.graphicsArrows = challenge;
        this.currentAction = this.graphicsArrows.action();

    }]);