gesturesApp.factory('game.challenges.challenges.services', ['game.challenges.arrows.services',
    function(arrowsService) {

        var self = this;
        var arrowsValue = arrowsService.getValues();

        self.challenges = [
        ];

        for(var typeProp in arrowsValue) {
            typeChallenge = arrowsValue[typeProp];
            for(var challengeprop in typeChallenge) {
                var challenge = typeChallenge[challengeprop];
                self.challenges.push(challenge);
            }
        }

        return {
            getList: function() {
                return self.challenges;
            },
            getRandomChallenge: function() {
                var indexRandomChallenge = _.random(0, self.challenges.length - 1);
                return self.challenges[indexRandomChallenge];
            },
            getChallengeById: function(challengeId) {
                var challenge = _.find(self.challenges, function(challenge) {
                    return (challenge.id === challengeId);
                });
                return challenge;
            }
        };

    }]);