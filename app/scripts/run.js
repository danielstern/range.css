angular.module("DemoApp").run(function ($rootScope, presets, $timeout) {
    $rootScope.presets = presets;

    $rootScope.$watch('slider', function (slider, old) {
        var lessVals = angular.copy(slider);

        function toRGBA(rgbObject) {
            return "rgba(" + rgbObject.r + "," + rgbObject.g + "," + rgbObject.b + "," + rgbObject.a + ")";
        }

        lessVals['thumb-color'] = toRGBA(lessVals['thumb-color']);
        lessVals['thumb-border-color'] = toRGBA(lessVals['thumb-border-color']);
        lessVals['thumb-shadow-color'] = toRGBA(lessVals['thumb-shadow-color']);

        lessVals['track-color'] = toRGBA(lessVals['track-color']);
        lessVals['track-border-color'] = toRGBA(lessVals['track-border-color']);
        lessVals['track-shadow-color'] = toRGBA(lessVals['track-shadow-color']);

        lessVals['track-radius'] += "px";
        lessVals['track-shadow-size'] += "px";
        lessVals['track-shadow-blur'] += "px";
        lessVals['track-height'] += "px";
        lessVals['track-border-width'] += "px";

        lessVals['thumb-shadow-size'] += "px";
        lessVals['thumb-shadow-blur'] += "px";
        lessVals['thumb-height'] += "px";
        lessVals['thumb-width'] += "px";
        lessVals['thumb-border-width'] += "px";
        lessVals['thumb-radius'] += "px";

        lessVals['contrast'] += "%";
        less.modifyVars(lessVals);

        if (slider.namespace) {
        } else {
        }
    }, true);

    $rootScope.$watch(function () {
        return less.lastCSS;
    }, function (newVal, oldVal) {
        if (newVal) {
            $rootScope.output = newVal;
        }
    });

    $rootScope.less = less;

    $rootScope.slider = presets['Bootstrap'];
});
