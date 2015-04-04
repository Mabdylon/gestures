gesturesApp.factory('commons.animatecss.service', ['$interval', function($interval) {

    var self = this;
    var globalDuration = 1;

    var setDuration = function(duration) {
        self.globalDuration = duration;
    };

    var animate = function(id, className, duration, onComplete) {
        if(duration instanceof Function) {
            onComplete = duration;
            duration = self.globalDuration;
        }
        if(!duration) {
            duration = self.globalDuration;
        }
        var element = angular.element(document.querySelectorAll(id));
        removeAllAnimationClasses(element);
        if(onComplete) {
            element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', onComplete);
        }
        addDuration(element, duration);
        element.addClass('animated '+className);
    };

    var addDuration = function(element, duration) {
        element.css('webkit-animation-duration', duration+'s');
        element.css('moz-animation-duration', duration+'s');
        element.css('MS-animation-duration', duration+'s');
        element.css('animation-duration', duration+'s');
    };

    var animateRepeat = function(id, className, interval, onComplete) {
        return $interval(function() {
                animate(id, className, onComplete);
        }, interval);
    };

    var removeAllAnimationClasses = function(element) {
      element.removeClass('animated bounce flash pulse rubberBand shake swing tada wobble');
      element.removeClass('bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp');
      element.removeClass('bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp');
      element.removeClass('fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight');
      element.removeClass('fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig');
      element.removeClass('fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp');
      element.removeClass('fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut');
      element.removeClass('rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight');
      element.removeClass('rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight');
      element.removeClass('hinge rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp');
      element.removeClass('zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft');
      element.removeClass('slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp');
    };

    return {
        animate: animate,
        animateRepeat: animateRepeat,
        setDuration: setDuration
    };

}]);