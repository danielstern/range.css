angular.module("DemoApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
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
    "default": {
        'track-color': '#616161',
        'thumb-color': '#8396d7',
        'thumb-border-color': '#3e58b6',
        'thumb-roundness': 50,
        'thumb-height': 16,
        'thumb-shadow-size': 1,
        'thumb-width': 16,
        'thumb-shadow-blur': 1,
        'thumb-shadow-color': '#111',
        'thumb-border-width': 1,
        'track-shadow-size': 1,
        'track-shadow-blur': 1,
        'track-border-width': 1,
        'track-height': 5,
        'track-radius': 5,
        'track-border-color': '#3e58b6',
        'contrast': 5,
        'namespace': 'slider'
    },
    "terminator": {
        'thumb-color': '#9b3141',
        'thumb-border-color': '#732631',
        'thumb-roundness': 0,
        'thumb-height': 25,
        'thumb-width': 10,
        'thumb-shadow-size': 0,
        'thumb-shadow-blur': 0,
        'thumb-shadow-color': '#111',
        'thumb-border-width': 1,
        'track-color': '#1a1a1a',
        'track-shadow-size': 1,
        'track-shadow-blur': 1.5,
        'track-border-width': 1,
        'track-height': 25,
        'track-radius': 0,
        'track-border-color': '#000',
        'contrast': 5,
        'namespace': 'slider'
    }
}).run(function ($rootScope, presets) {
    $rootScope.presets = presets;

    $rootScope.$watch('slider', function (slider, old) {
        console.log("Slider...", slider);
        var lessVals = angular.copy(slider);

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
        lessVals['thumb-roundness'] += "%";

        lessVals['contrast'] += "%";
        less.modifyVars(lessVals);

        if (slider.namespace) {
            $rootScope.output = __lastCSS.replace(/input\[type=range\]/g, 'input[type=range].' + slider.namespace);
        } else {
            $rootScope.output = __lastCSS;
        }
    }, true);

    $rootScope.slider = presets.default;
});
