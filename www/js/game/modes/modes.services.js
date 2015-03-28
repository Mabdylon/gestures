gesturesApp.factory('game.modes.modes.service', function() {

    var self = this;

    self.modes = {
        list: [{
                name: 'Time Attack',
                state: 'game.timeAttack',
                theme: {
                    button: {
                        color: 'button-positive'
                    },
                    topBar: {
                        color: 'bar-positive'
                    },
                    background: {
                        color: 'positive-bg'
                    },
                    bottomBar: {
                        color: 'bar-assertive'
                    }
                }
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
        getCurrentTheme: function() {
            return self.modes.currentMode.theme;
        }

    };
});