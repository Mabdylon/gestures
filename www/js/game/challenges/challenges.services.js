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
        goToRandomChallenge: function() {
          var randomChallenge = challenges.list[_.random(0, challenges.list.length - 1)];
          $stateParams.challengeState = randomChallenge.state;
          var randomValue = _.random(0, randomChallenge.values.length - 1);
          $stateParams.challengeValue = randomChallenge.values[randomValue];
          $state.go('game.mode.challenge', $stateParams);
        },
        getChallengeByState: function(state) {
            return _.findWhere(challenges.list, {state: state});
        }
    };

}]);