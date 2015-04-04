gesturesApp.controller('game.modes.story.storyOver.controller', ['$state', 'commons.scores.service', '$stateParams', 
    function($state, scoresService, $stateParams){

    this.nextLevel = $stateParams.level;

    this.goNextLevel = function() {
      $state.go('game.levels', {
          level: $stateParams.level
      });  
    };

}]);