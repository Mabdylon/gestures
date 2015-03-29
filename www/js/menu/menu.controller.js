gesturesApp.controller('menu.menu.controller',
        ['game.modes.modes.service', '$state', '$interval', '$timeout', function(modesService, $state, $interval, $timeout) {

                var titleElement = angular.element(document.querySelector('#app-title'));

                this.modes = modesService.getList();

                this.goToMode = function(mode) {
                    var mode = mode;
                    this.animate(mode, function() {
                        $state.go(mode.state);
                    });
                };

                this.animate = function(mode, onComplete) {
                    var selectedModeElement = angular.element(document.querySelector('#app-'+mode.id));
                    selectedModeElement.removeClass('animated fadeInLeftBig');
                    titleElement.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', onComplete);
                    titleElement.addClass('animated rollOut');
                    selectedModeElement.addClass('animated fadeOutRightBig');
                    $interval.cancel(attentionInterval);
                };

                this.attention = function() {
                    titleElement.removeClass('animated rollIn rollOut');
                    titleElement.removeClass('animated rubberBand');
                    $timeout(function() {
                        titleElement.addClass('animated rubberBand');
                    },100);
                };

                var attentionInterval = $interval(this.attention, 4000);


            }]);