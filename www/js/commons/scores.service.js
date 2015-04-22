"use strict";

gesturesApp.factory('commons.scores.service', ['commons.utils.service', 'localStorageService',
    function(utilsService, localStorageService) {

    var myTotalScoreKey = 'scores.my.totalScore';
    var myCurrentScoreKey = 'scores.my.currentScore';

    var myTotalScore = utilsService.initOrLoadIntValue(myTotalScoreKey);
    var myCurrentScore = utilsService.initOrLoadIntValue(myCurrentScoreKey);

    var addMyScore = function(amount) {
        myCurrentScore += amount;
        localStorageService.set(myCurrentScoreKey, myCurrentScore);
        myTotalScore += amount;
        localStorageService.set(myTotalScoreKey, myTotalScore);
        return myCurrentScore;
    };

    var resetMyScore = function() {
        myCurrentScore = 0;
        localStorageService.set(myCurrentScoreKey, myCurrentScore);
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

}]);