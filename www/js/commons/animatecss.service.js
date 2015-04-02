gesturesApp.factory('commons.animatecss.service', ['$interval', function($interval) {

    var animate = function(id, className, onComplete) {
        var element = angular.element(document.querySelector(id));
        removeAllAnimationClasses(element);
        if(onComplete) {
            element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', onComplete);
        }
        element.addClass('animated '+className);
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
        animateRepeat: animateRepeat
    };

}]);