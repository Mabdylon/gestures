gesturesApp.controller('menu.menu.controller',
        ['game.modes.modes.service', '$state', '$interval', '$timeout', 'commons.scores.service', 'commons.animatecss.service',
            function(modesService, $state, $interval, $timeout, scoresService, animatecssService) {

                var self = this;
                var titleId = 'app-title';
                this.myTotalScore = scoresService.getMyTotalScore();
                this.modes = modesService.getList();
                animatecssService.setDuration(1);

                this.goToMode = function(mode) {
                    var mode = mode;
                    this.animateOnSelect(mode, function() {
                        $state.go(mode.state);
                    });
                };

                this.animateOnSelect = function(mode, onComplete) {
                    animatecssService.animate('.'+mode.class, 'fadeOut');
                    animatecssService.animate('#'+mode.id, 'fadeOutRightBig', onComplete);
                    animatecssService.animate('#'+titleId, 'rollOut');
                    animatecssService.animate('#total-score', 'fadeOut');
                    $interval.cancel(attentionInterval);
                };

                var attentionInterval = animatecssService.animateRepeat('#'+titleId, 'rubberBand', 4000, function() {
                    animatecssService.animate('#total-score', 'rubberBand');
                });

            }]);