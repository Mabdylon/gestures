gesturesApp.factory('game.scores.scores.service', function(localStorageService) {

    var initOrLoadValue = function(id) {
        var storageValue = localStorageService.get(id);
        var value = storageValue | 0;
        return value;
    };
    
    var myTotalScoreKey = 'scores.my.totalScore';
    var myCurrentScoreKey = 'scores.my.currentScore';

    var myTotalScore = initOrLoadValue(myTotalScoreKey);
    var myCurrentScore = initOrLoadValue(myCurrentScoreKey);

    var addMyScore = function(amount) {
        myCurrentScore += amount;
        myTotalScore += amount;
        localStorageService.set(myCurrentScoreKey, myCurrentScore);
        localStorageService.set(myTotalScoreKey, myTotalScore);
        return myCurrentScore;
    };

    var resetMyScore = function() {
        myCurrentScore = 0;
        localStorageService.set(myTotalScoreKey, myCurrentScore);
        return myCurrentScore;
    };

    return {
        addMyScore: addMyScore,
        resetMyScore: resetMyScore,
        getMyCurrentScore: function() {
            return myCurrentScore;
        },
        getMyTotalScore: function() {
            return myTotalScore;
        }
    };

});