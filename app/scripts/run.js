angular.module("DemoApp").run(function ($rootScope, presets, $timeout) {
    $rootScope.presets = presets;

    $rootScope.$watch('slider', updateSlider, true);

    function updateSlider() {
        var slider = $rootScope.slider;
        var lessVals = angular.copy(slider);

        function toRGBA(rgbObject) {
            return "rgba(" + parseFloat(rgbObject.r) + "," + parseFloat(rgbObject.g) + "," + parseFloat(rgbObject.b) + "," + parseFloat(rgbObject.a) + ")";
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
    }

    setTimeout(updateSlider, 1000);

    $rootScope.$watch(function () {
        return less.lastCSS + $rootScope.slider.namespace;
    }, function (newVal, oldVal) {
        if (newVal) {
            if ($rootScope.slider.namespace) {
                $rootScope.output = less.lastCSS.replace(/input\[type=range\]/g, 'input[type=range].' + $rootScope.slider.namespace);
            } else {
                $rootScope.output = less.lastCSS;
            }
        }
    });

    $rootScope.less = less;

    $rootScope.slider = presets['Bootstrap'];
}).directive("input", function ($compile) {
    return {
        restrict: "E",
        link: function (scope, elem, attrs) {
            var container = elem.after("<inputs></inputs>").next();
            var inputs;
            if (attrs.type && attrs.type.indexOf("/") > -1) {
                inputs = attrs.type.split("/");
            } else {
                return;
            }

            if (attrs.label) {
                inputs.unshift("label");
            }

            inputs.forEach(function (type) {
                var input;

                if (type === "label") {
                    input = angular.element("<div>" + attrs.label + "</div>");
                } else {
                    input = angular.element("<input>");

                    for (var key in attrs) {
                        if (key[0] !== "$") {
                            input.attr(key, attrs[key]);
                        }
                    }
                    input.attr("ng-model", attrs.ngModel);
                    input.attr("class", elem.attr("class"));
                    input.attr("type", type);

                    $compile(input)(scope);
                }
                ;

                container.append(input);
            });
            elem.hide();
        }
    };
});
