declare var angular:any;
angular.module("DemoApp")
.run(function($rootScope,presets){

	$rootScope.presets = presets;

	$rootScope.$watch('slider',function(slider,old){
		var lessVals = angular.copy(slider);

		function toRGBA(rgbObject) {
			return "rgba("+rgbObject.r+","+rgbObject.g+","+rgbObject.b+","+rgbObject.a+")";

		}

		// var __lastCSS = __lastCSS || '';

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
		lessVals['thumb-radius'] += "px";

		lessVals['contrast'] += "%";
		less.modifyVars(lessVals);

		if (slider.namespace) {
			$rootScope.output = __lastCSS.replace(/input\[type=range\]/g,'input[type=range].'+slider.namespace);
		} else {
			if (__lastCSS) {
				console.log("Last CSS?",__lastCSS);
				$rootScope.output = __lastCSS;
			}
		}

		// console.log("Last cSS?",__lastCSS);

		// console.log("Generated Values?",angular.toJson(slider));

	},true);

	$rootScope.slider = presets['Bootstrap'];
	// $rootScope.slider.y= 2;



})