gesturesApp.factory('game.levels.levels.service', function() {

    var self = this;

    self.levels = {
        list: [
            {
                id: 1,
                name: 'The begining',
                hints: 'Hints : Swipe the arrow !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-graphic-white-up',
                    'arrows-graphic-white-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-white-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-white-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-white-left'
                ]
            }
        ]
    };

    return {
        getList: function() {
            return self.levels.list;
        },
        getLevelById: function(levelId) {
            var level = _.find(self.levels.list, function(level) {
                return (level.id.toString() === levelId);
            });
            return level;
        }
    };

});