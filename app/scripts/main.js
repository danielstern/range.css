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
    var greeting = "Ice to meet you.";
    console.log(greeting);

    $rootScope.slider = {
        color1: '#909731',
        color2: '#342f7f',
        'shadow-color': '#111',
        'thumb-roundness': 50,
        'thumb-height': 30,
        'thumb-width': 30,
        'contrast': 5,
        'track-height': 10,
        'track-radius': 4,
        'thumb-border-width': 1
    };

    $rootScope.$watch('slider', function (slider, old) {
        if (slider === old)
            return;
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
});
