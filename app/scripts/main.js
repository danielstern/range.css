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
}).run(function ($rootScope) {
    $rootScope.$watch('slider', function (slider, old) {
        var lessVals = angular.copy(slider);
        lessVals['thumb-roundness'] += "%";
        lessVals['range-roundness'] += "px";
        lessVals['thumb-height'] += "px";
        lessVals['thumb-width'] += "px";
        lessVals['thumb-border-width'] += "px";
        lessVals['contrast'] += "%";

        lessVals['track-radius'] += "px";
        lessVals['track-height'] += "px";
        less.modifyVars(lessVals);
    }, true);

    $rootScope.slider = {
        color1: '#616161',
        color2: '#8396d7',
        'thumb-border-color': '#3e58b6',
        'shadow-color': '#111',
        'thumb-roundness': 50,
        'thumb-height': 40,
        'thumb-width': 40,
        'contrast': 5,
        'track-height': 10,
        'track-radius': 5,
        'thumb-border-width': 1
    };
});
