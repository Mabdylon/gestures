"use strict";

gesturesApp.factory('game.modes.modes.service', function() {

    var self = this;

    self.modes = {
        list: [ {
                name: 'Story',
                state: 'game.levels',
                id: 'story',
                class: 'menu-mode',
                color: 'positive'
            },{
                name: 'Time Attack',
                state: 'game.timeAttack',
                id: 'time-attack',
                class: 'menu-mode',
                color: 'assertive'
            }],
        currentMode: null
    };

    return {
        getList: function() {
            return self.modes.list;
        },
        setCurrentMode: function(stateName) {
            var mode = _.find(self.modes.list, function(mode) {
                return (stateName === mode.state);
            });
            self.modes.currentMode = mode;
        },
        getCurrentMode: function() {
            return self.modes.currentMode;
        }

    };
});