gesturesApp.factory('game.modes.modes.service', function() {

    var modes = {
        list: [{
                name: 'Speed Attack',
                state: 'speedAttack'
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
        },
        success: function() {
            modes.currentMode.success();
        }
    };
});