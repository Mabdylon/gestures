gesturesApp.factory('game.challenges.arrows.challenge.services', function() {

    var challenges = {
        list: [
//            {
//                name: 'Graphical Arrow Up',
//                state: 'graphic-arrow-up'
//            },
            {
                name: 'Graphical Arrow Bottom',
                state: 'graphic-arrow-bottom'
            },
            {
                name: 'Graphical Arrow Up',
                state: 'graphic-arrow-left'
            },
//            {
//                name: 'Graphical Arrow Right',
//                state: 'graphic-arrow-right'
//            }
        ]
    };

    return {
        getList: function() {
            return challenges.list;
        },
        getRandomChallenge: function() {
          var random = _.random(0, challenges.list.length - 1);
          return challenges.list[random];
        }
    };

});