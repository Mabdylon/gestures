gesturesApp.factory('game.challenges.challenges.services', ['game.challenges.arrows.services', 'game.challenges.circles.services',
    function(arrowsService, circlesService) {

        var self = this;
        var arrowsValues = arrowsService.getValues();
        var circlesValues = circlesService.getValues();

        self.challenges = [
        ];

        for(var typeProp in arrowsValues) {
            typeChallenge = arrowsValues[typeProp];
            for(var challengeprop in typeChallenge) {
                var challenge = typeChallenge[challengeprop];
                self.challenges.push(challenge);
            }
        }

        for(var challenge in circlesValues) {
            self.challenges.push(circlesValues[challenge]);
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