
angular.module("DemoApp", ['ui.router', 'colorPicker']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                templateUrl: 'partials/main.html'
            }
        }
    }).state('docs', {
        url: '/docs',
        views: {
            "main": {
                templateUrl: 'partials/docs.html'
            }
        }
    });
}).value("presets", {
    "Bootstrap": {
        "thumb-color": {
            "r": 255,
            "g": 255,
            "b": "255",
            "a": 1
        },
        "track-color": {
            "r": 48,
            "g": 113,
            "b": 169,
            "a": 1
        },
        "thumb-border-color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
        },
        "thumb-radius": "3",
        "thumb-height": "36",
        "thumb-shadow-size": 1,
        "thumb-width": 16,
        "thumb-shadow-color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
        },
        "thumb-shadow-blur": 1,
        "thumb-border-width": 1,
        "track-shadow-size": 1,
        "track-shadow-blur": 1,
        "track-border-width": "0.2",
        "track-height": "8.4",
        "track-radius": "1.3",
        "track-border-color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
        },
        "track-shadow-color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
        },
        "contrast": 5,
        "namespace": ""
    },
    "Terminator": {
        "thumb-color": {
            "r": "255",
            "g": 67,
            "b": 95,
            "a": "0.93"
        },
        "track-color": {
            "r": "72",
            "g": 77,
            "b": 77,
            "a": 1
        },
        "thumb-border-color": {
            "r": 255,
            "g": "30",
            "b": 0,
            "a": 1
        },
        "thumb-radius": "0",
        "thumb-height": "27",
        "thumb-shadow-size": "0",
        "thumb-width": "18",
        "thumb-shadow-color": {
            "r": "103",
            "g": 0,
            "b": 0,
            "a": 1
        },
        "thumb-shadow-blur": 1,
        "thumb-border-width": "0",
        "track-shadow-size": 1,
        "track-shadow-blur": 1,
        "track-border-width": "0",
        "track-height": "25.6",
        "track-radius": "0",
        "track-border-color": {
            "r": 1,
            "g": 1,
            "b": 1,
            "a": 1
        },
        "track-shadow-color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
        },
        "contrast": 5,
        "namespace": "slider"
    },
    "Low-Fi": {
        "thumb-color": {
            "r": 107,
            "g": 24,
            "b": "23",
            "a": "1"
        },
        "track-color": {
            "r": 146,
            "g": "132",
            "b": 131,
            "a": 1
        },
        "thumb-border-color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
        },
        "thumb-radius": "2",
        "thumb-height": "39",
        "thumb-shadow-size": 1,
        "thumb-width": "19",
        "thumb-shadow-color": {
            "r": "5",
            "g": 0,
            "b": 0,
            "a": "1"
        },
        "thumb-shadow-blur": 1,
        "thumb-border-width": "2.2",
        "track-shadow-size": 1,
        "track-shadow-blur": 1,
        "track-border-width": "0.7",
        "track-height": "12.6",
        "track-radius": "6.2",
        "track-border-color": {
            "r": 86,
            "g": 36,
            "b": "37",
            "a": 1
        },
        "track-shadow-color": {
            "r": 0,
            "g": 0,
            "b": 0,
            "a": 1
        },
        "contrast": 5,
        "namespace": ""
    },
    "Lorien": {
        "thumb-color": {
            "r": 67,
            "g": "150",
            "b": 67,
            "a": 1
        },
        "track-color": {
            "r": 32,
            "g": "89",
            "b": 40,
            "a": "1"
        },
        "thumb-border-color": {
            "r": 131,
            "g": 229,
            "b": "132",
            "a": 1
        },
        "thumb-radius": "12",
        "thumb-height": "23",
        "thumb-shadow-size": "2.6",
        "thumb-width": "23",
        "thumb-shadow-color": {
            "r": 0,
            "g": "170",
            "b": 0,
            "a": 1
        },
        "thumb-shadow-blur": "3.7",
        "thumb-border-width": "2.5",
        "track-shadow-size": "0.9",
        "track-shadow-blur": "1.7",
        "track-border-width": "1.1",
        "track-height": "11.3",
        "track-radius": "1",
        "track-border-color": {
            "r": "24",
            "g": 213,
            "b": 1,
            "a": 1
        },
        "track-shadow-color": {
            "r": 0,
            "g": "34",
            "b": 0,
            "a": 1
        },
        "contrast": 5,
        "namespace": ""
    }
}).run(function ($rootScope, presets) {
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
            $rootScope.output = __lastCSS.replace(/input\[type=range\]/g, 'input[type=range].' + slider.namespace);
        } else {
            $rootScope.output = __lastCSS;
        }

        console.log("Generated Values?", angular.toJson(slider));
    }, true);

    $rootScope.slider = presets['Bootstrap'];
});
