gesturesApp.factory('game.modes.modes.service', function() {

    var modes = {
        list: [{
                name: 'Speed Attack',
                state: 'speed-attack'
            }],
        currentMode: null
    };

    return {
        getList: function() {
            return modes.list;
        },
        getCurrentMode: function() {
            return modes.currentMode;
        },
        setCurrentMode: function(mode) {
            modes.currentMode = mode;
        }
    };
});