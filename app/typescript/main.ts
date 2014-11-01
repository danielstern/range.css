/// <reference path="colorPicker.ts"/>

declare var angular:any;
declare var less:any;
declare var __lastCSS:any;
declare var __lastCSSMin:any;


angular.module("DemoApp",['ui.router','colorPicker'])
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
				url: '/',
        views: {
        	"main": {
        		templateUrl:'partials/main.html'
        	},
        	// "image": {
        	// 	template:'<img src=http://lorempixel.com/output/cats-q-c-300-200-5.jpg>'
        	// }
        }
		})
		.state('docs',{
			url: '/docs',
			views: {
				"main": {
					templateUrl:'partials/docs.html'
				},
				// "image": {
				// 	template:'<img src=http://lorempixel.com/output/abstract-q-c-300-200-9.jpg>'
				// }
			}
			})
})
.value("presets",{
	"Default":{
		'thumb-color': {
			r:32,
			g:67,
			b:95,
			a:1
		},
		'track-color': {
			r:77,
			g:77,
			b:77,
			a:1
		},
		'thumb-border-color': {
			r:0,
			g:0,
			b:0,
			a:1
		},
		'thumb-roundness': 50,
		'thumb-height': 16,
		'thumb-shadow-size': 1,
		'thumb-width': 16,
		'thumb-shadow-color': {
			r:0,
			g:0,
			b:0,
			a:1
		},
		'thumb-shadow-blur': 1,
		'thumb-border-width': 1,

		'track-shadow-size': 1,
		'track-shadow-blur': 1,
		'track-border-width': 1,
		'track-height': 5,
		'track-radius': 5,
		'track-border-color': {
			r:1,
			g:1,
			b:1,
			a:1
		},
		'track-shadow-color': {
			r:0,
			g:0,
			b:0,
			a:1
		},
		'contrast':5,
		'namespace':'slider',
	},
	"Terminator":{
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
    "thumb-roundness": "0",
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
}

})

.run(function($rootScope,presets){

	$rootScope.presets = presets;

	$rootScope.$watch('slider',function(slider,old){
		// slider['thumb-roundness'] += "%";
		// if (slider === old) return;
		var lessVals = angular.copy(slider);

		function toRGBA(rgbObject) {
			return "rgba("+rgbObject.r+","+rgbObject.g+","+rgbObject.b+","+rgbObject.a+")";

		}

		lessVals['thumb-color'] = toRGBA(lessVals['thumb-color']);
		lessVals['thumb-border-color'] = toRGBA(lessVals['thumb-border-color']);
		lessVals['thumb-shadow-color'] = toRGBA(lessVals['thumb-shadow-color']);

		lessVals['track-color'] = toRGBA(lessVals['track-color']);
		lessVals['track-border-color'] = toRGBA(lessVals['track-border-color']);
		lessVals['track-shadow-color'] = toRGBA(lessVals['track-shadow-color']);





		// lessVals['thumb-color'] = "rgba("+lessVals['thumb-color'].r+","+lessVals['thumb-color'].g+","+lessVals['thumb-color'].b+","+lessVals['thumb-color'].a+")";
		// lessVals['thumb-color'] = "rgba("+lessVals['thumb-color'].r+","+lessVals['thumb-color'].g+","+lessVals['thumb-color'].b+","+lessVals['thumb-color'].a+")";
		// lessVals['thumb-color'] = "rgba("+lessVals['thumb-color'].r+","+lessVals['thumb-color'].g+","+lessVals['thumb-color'].b+","+lessVals['thumb-color'].a+")";
		// console.log("Slider...",slider,lessVals);

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
			$rootScope.output = __lastCSS.replace(/input\[type=range\]/g,'input[type=range].'+slider.namespace);
		} else {
			$rootScope.output = __lastCSS;
		}

		console.log("Generated Values?",angular.toJson(slider));

	},true);

	$rootScope.slider = presets['Terminator'];
	// $rootScope.slider.y= 2;


})