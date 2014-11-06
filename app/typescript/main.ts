// / <reference path="colorPicker.ts"/>
/// <reference path="presets.ts"/>

declare var angular:any;
declare var less:any;
declare var __lastCSS:string;

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
