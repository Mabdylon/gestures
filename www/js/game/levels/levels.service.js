"use strict";

gesturesApp.factory('game.levels.levels.service', [
    function() {

    var self = this;

    self.levels = {
        list: [
            {
                id: 1,
                number: 1,
                name: 'The begining',
                hints: 'Swipe the arrow !',
                color: 'dark',
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
                number: 2,
                name: 'Reverse',
                hints: 'Let\'s swipe to the opposite !',
                color: 'positive',
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
                number: 3,
                name: 'The Mix',
                hints: 'What about mixin\' it up ?',
                color: 'calm',
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
                number: 4,
                name: 'Arrow Mix',
                hints: 'Think and swipe',
                color: 'balanced',
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
                number: 5,
                name: 'Better, Harder',
                hints: 'Think, swipe and be fast !',
                color: 'energized',
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
                number: 6,
                name: 'Enough arrows',
                hints: 'Read and swipe !',
                color: 'assertive',
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
                number: 7,
                name: 'Reverse text',
                hints: 'Read and swipe to the opposite !',
                color: 'royal',
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
                number: 8,
                name: 'The text Mix',
                hints: 'Read, think and swipe !',
                color: 'dark',
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
                number: 9,
                name: 'The Mega Mix',
                hints: 'Arrows are back !',
                color: 'positive',
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
                number: 10,
                name: 'The Giga Mix',
                hints: 'Oh come on you don\'t need hints anymore !',
                color: 'calm',
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
            },
             {
                id: 11,
                number: 11,
                name: 'New : the circle !',
                hints: 'It\' new, its fresh, press or double press it !',
                color: 'balanced',
                challenges: [
                    'circle-hold-white',
                    'circle-doubletap-white',
                    'circle-hold-white',
                    'circle-doubletap-white',
                    'circle-hold-white',
                    'circle-doubletap-white'
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
                if(angular.isString(levelId)) {
                    return (level.id.toString() === levelId);
                } else {
                    return (level.id === levelId);
                }
            });
            return level;
        }
    };

}]);