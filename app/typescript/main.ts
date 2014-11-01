declare var angular:any;
declare var less:any;


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

	var greeting : string = "Ice to meet you.";
	console.log(greeting);

	$rootScope.slider = {
		color1: '#909731',
		color2: '#342f7f',
		'shadow-color': '#111',
		'thumb-roundness': 50,
		'thumb-height': 30,
		'thumb-width': 30,
		// 'track-width': 100,
		'track-height': 10,
	};

	$rootScope.$watch('slider',function(slider,old){
		// slider['thumb-roundness'] += "%";
		if (slider === old) return;
		var lessVals = angular.copy(slider);
		lessVals['thumb-roundness'] += "%";
		lessVals['thumb-height'] += "px";
		lessVals['thumb-width'] += "px";
		
		lessVals['track-height'] += "px";
		less.modifyVars(lessVals);
	},true);


})