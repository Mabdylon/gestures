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
                    'arrows-graphic-white-left'
                ]
            },
            {
                id: 2,
                name: 'Reverse',
                hints: 'Hints : Let\'s swipe to the opposite !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-graphic-black-up',
                    'arrows-graphic-black-right',
                    'arrows-graphic-black-down',
                    'arrows-graphic-black-left',
                    'arrows-graphic-black-up',
                    'arrows-graphic-black-right',
                    'arrows-graphic-black-down',
                    'arrows-graphic-black-left'
                ]
            },
            {
                id: 3,
                name: 'The Mix',
                hints: 'Hints : What about mixin\' it up ?',
                color: 'balanced-bg',
                challenges: [
                    'arrows-graphic-white-up',
                    'arrows-graphic-white-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-black-up',
                    'arrows-graphic-black-right',
                    'arrows-graphic-black-down',
                    'arrows-graphic-black-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-black-left'
                ]
            },
            {
                id: 4,
                name: 'The Arrow Mix',
                hints: 'Hints : Think and swipe',
                color: 'balanced-bg',
                challenges: [
                    'arrows-graphic-white-up',
                    'arrows-graphic-white-down',
                    'arrows-graphic-black-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-black-down',
                    'arrows-graphic-black-right',
                    'arrows-graphic-black-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-up',
                    'arrows-graphic-white-down',
                    'arrows-graphic-black-right'
                ]
            },
            {
                id: 5,
                name: 'Better, Harder, Faster, Longer',
                hints: 'Hints : Think, swipe and be fast !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-graphic-white-up',
                    'arrows-graphic-white-down',
                    'arrows-graphic-black-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-black-up',
                    'arrows-graphic-black-left',
                    'arrows-graphic-black-up',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-up',
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-black-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-up',
                    'arrows-graphic-white-down'
                ]
            },
            {
                id: 6,
                name: 'Enough arrows',
                hints: 'Hints : Read and swipe !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-texts-white-up',
                    'arrows-texts-white-right',
                    'arrows-texts-white-down',
                    'arrows-texts-white-left',
                    'arrows-texts-white-up',
                    'arrows-texts-white-right',
                    'arrows-texts-white-down',
                    'arrows-texts-white-left'
                ]
            },
            {
                id: 7,
                name: 'Reverse text',
                hints: 'Hints : Read and swipe to the opposite !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-texts-black-up',
                    'arrows-texts-black-right',
                    'arrows-texts-black-down',
                    'arrows-texts-black-left',
                    'arrows-texts-black-up',
                    'arrows-texts-black-right',
                    'arrows-texts-black-down',
                    'arrows-texts-black-left'
                ]
            },
            {
                id: 8,
                name: 'The text Mix',
                hints: 'Hints : Read, think and swipe !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-texts-white-up',
                    'arrows-texts-white-right',
                    'arrows-texts-white-down',
                    'arrows-texts-black-left',
                    'arrows-texts-white-up',
                    'arrows-texts-black-right',
                    'arrows-texts-white-down',
                    'arrows-texts-black-left'
                ]
            },
            {
                id: 9,
                name: 'The Mega Mix',
                hints: 'Hints : Arrows are back !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-texts-white-up',
                    'arrows-graphic-white-down',
                    'arrows-graphic-black-down',
                    'arrows-texts-white-left',
                    'arrows-texts-black-up',
                    'arrows-graphic-black-left',
                    'arrows-graphic-black-up',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-up',
                    'arrows-texts-white-up',
                    'arrows-texts-black-right',
                    'arrows-graphic-white-down',
                    'arrows-texts-black-right',
                    'arrows-graphic-white-down',
                    'arrows-graphic-white-left',
                    'arrows-texts-white-up',
                    'arrows-texts-black-up',
                    'arrows-graphic-white-down'
                ]
            },
            {
                id: 10,
                name: 'The Mega Mix',
                hints: 'Hints : Oh come on you don\'t need hints anymore !',
                color: 'balanced-bg',
                challenges: [
                    'arrows-graphic-white-up',
                    'arrows-graphic-black-down',
                    'arrows-texts-white-up',
                    'arrows-texts-black-right',
                    'arrows-graphic-black-right',
                    'arrows-texts-black-up',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-down',
                    'arrows-texts-black-up',
                    'arrows-graphic-black-left',
                    'arrows-graphic-black-right',
                    'arrows-graphic-white-right',
                    'arrows-graphic-black-right',
                    'arrows-graphic-white-left',
                    'arrows-texts-white-up',
                    'arrows-texts-black-left',
                    'arrows-graphic-white-right',
                    'arrows-texts-black-right',
                    'arrows-texts-white-up',
                    'arrows-graphic-black-down',
                    'arrows-graphic-black-down',
                    'arrows-texts-white-down',
                    'arrows-texts-black-up',
                    'arrows-graphic-black-left',
                    'arrows-texts-black-up',
                    'arrows-graphic-white-left',
                    'arrows-graphic-white-left',
                    'arrows-texts-black-up',
                    'arrows-graphic-black-left',
                    'arrows-graphic-black-left',
                    'arrows-graphic-white-right',
                    'arrows-graphic-black-left',
                    'arrows-graphic-white-left',
                    'arrows-texts-white-up',
                    'arrows-texts-black-up',
                    'arrows-graphic-white-down',
                    'arrows-texts-black-right',
                    'arrows-texts-white-right'
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