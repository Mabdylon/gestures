gesturesApp.controller('menu.menu.controller',
        ['game.modes.modes.service', '$state', '$interval', '$timeout', 'scores.scores.service', 'commons.animatecss.service',
            function(modesService, $state, $interval, $timeout, scoresService, animatecssService) {

                var self = this;
                var titleId = 'app-title';
                this.myTotalScore = scoresService.getMyTotalScore();
                this.modes = modesService.getList();

                this.goToMode = function(mode) {
                    var mode = mode;
                    this.animate(mode, function() {
                        $state.go(mode.state);
                    });
                };

                this.animate = function(mode, onComplete) {
                    animatecssService.animate('#'+mode.id, 'fadeOutRightBig', onComplete);
                    animatecssService.animate('#'+titleId, 'rollOut');
                    _.each(self.modes, function(parseMode) {
                        if(parseMode.id !== mode.id) {
                            animatecssService.animate('#'+parseMode.id, 'fadeOut');
                        }
                    });
                    animatecssService.animate('#total-score', 'fadeOut');
                    $interval.cancel(attentionInterval);
                };


                var attentionInterval = animatecssService.animateRepeat('#'+titleId, 'rubberBand', 4000, function() {
                    animatecssService.animate('#total-score', 'rubberBand');
                });


            }]);