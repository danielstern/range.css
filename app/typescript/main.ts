declare var angular:any;
declare var less:any;
declare var __lastCSS:any;
declare var __lastCSSMin:any;

angular.module("DemoApp",['ui.router'])
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
.run(function($rootScope){


	$rootScope.$watch('slider',function(slider,old){
		// slider['thumb-roundness'] += "%";
		// if (slider === old) return;
		var lessVals = angular.copy(slider);
		lessVals['thumb-roundness'] += "%";
		lessVals['range-roundness'] += "px";
		lessVals['thumb-height'] += "px";
		lessVals['thumb-width'] += "px";
		lessVals['thumb-border-width'] += "px";
		lessVals['contrast'] += "%";

		lessVals['track-radius'] += "px";
		lessVals['track-shadow-size'] += "px";
		lessVals['track-shadow-blur'] += "px";
		lessVals['thumb-shadow-size'] += "px";
		lessVals['thumb-shadow-blur'] += "px";
		lessVals['track-height'] += "px";
		less.modifyVars(lessVals);

		$rootScope.output = __lastCSS;
		$rootScope.outputMin = __lastCSSMin;
	},true);

	$rootScope.slider = {
		color1: '#616161',
		color2: '#8396d7',
		'thumb-border-color': '#3e58b6',
		'shadow-color': '#111',
		'thumb-roundness': 50,
		'thumb-height': 40,
		'thumb-shadow-size': 1,
		'thumb-shadow-blur': 1,
		'track-shadow-size': 1,
		'track-shadow-blur': 1,
		'thumb-width': 40,
		'contrast':5,
		'track-height': 10,
		'track-radius': 5,
		'thumb-border-width': 1,
	};
	// $rootScope.slider.y= 2;


})