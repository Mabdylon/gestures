gesturesApp.controller('game.challenges.graphicsArrows.graphicsArrows.controller', ['$stateParams', '$ionicGesture', 'game.modes.modes.service',
    function($stateParams, $ionicGesture, modesService) {

        var challengeContentElement = angular.element(document.querySelector( '#challenge-content-element' ) );

        var success = function() {
            modesService.success();
        };

        var values = {
            up: {
                text: 'Up',
                action: function() {
                    return $ionicGesture.on('dragup', success, challengeContentElement);
                }
            },
            down: {
                text: 'Down',
                action: function() {
                    return $ionicGesture.on('dragdown', success, challengeContentElement);
                }
            },
            left: {
                text: 'Left',
                action: function() {
                    return $ionicGesture.on('dragleft', success, challengeContentElement);
                }
            },
            right: {
                text: 'Right',
                action: function() {
                    return $ionicGesture.on('dragright', success, challengeContentElement);
                }
            }
        };
        
        var challenge = values[$stateParams.challengeValue];

        this.graphicsArrows = {
            text: challenge.text,
            action: challenge.action()
        };

}]);