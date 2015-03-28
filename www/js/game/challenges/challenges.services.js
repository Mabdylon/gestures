gesturesApp.factory('game.challenges.challenges.services', ['game.challenges.arrows.services',
    function(arrowsService) {

        var self = this;
        var arrowsValue = arrowsService.getValues();

        self.challenges = [
            arrowsValue.graphics.up,
            arrowsValue.graphics.down,
            arrowsValue.graphics.left,
            arrowsValue.graphics.right
        ];

        return {
            getList: function() {
                return self.challenges;
            },
            getRandomChallenge: function() {
                var indexRandomChallenge = _.random(0, self.challenges.length - 1);
                return self.challenges[indexRandomChallenge];
            }
        };

    }]);