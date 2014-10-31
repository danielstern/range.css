declare var angular:any;

var greeting : string = "Ice to meet you.";
console.log(greeting);

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