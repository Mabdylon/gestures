gesturesApp.factory('game.modes.modes.service', function() {

    var modes = {
        list: [{
                name: 'Speed Attack',
                state: 'speedAttack',
                button: {
                    color: 'button-positive'
                },
                bar: {
                    color: 'bar-positive'
                },
                background: {
                    color: 'positive'
                }
            }],
        currentMode: null
    };

    return {
        addToList: function(mode) {
            modes.list.push(mode);
        },
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