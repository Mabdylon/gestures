gesturesApp.factory('game.challenges.challenges.services', ['$state', '$stateParams', 
    function($state, $stateParams) {

    var challenges = {
        list: [
            {
                name: 'Graphical Arrow Bottom',
                state: 'graphicsArrows',
                values: ['up', 'down', 'left', 'right']
            }
        ]
    };

    return {
        getList: function() {
            return challenges.list;
        },
        goToRandomChallenge: function(stateParam) {
          var randomChallenge = challenges.list[_.random(0, challenges.list.length - 1)];
          stateParam.challengeState = randomChallenge.state;
          var randomValue = _.random(0, randomChallenge.values.length - 1);
          stateParam.challengeValue = randomChallenge.values[randomValue];
          $state.go('game.mode.challenge', stateParam);
        },
        getChallengeByState: function(state) {
            return _.findWhere(challenges.list, {state: state});
        }
    };

}]);