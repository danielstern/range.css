declare var angular:any;
declare var _:any;

angular.module("DemoApp")
.run(function($rootScope,presets,$timeout){

	$rootScope.presets = presets;



	$rootScope.$watch('slider',updateSlider,true);

	function updateSlider(){
		var slider = $rootScope.slider;
		var lessVals = angular.copy(slider);

		function toRGBA(rgbObject) {
			return "rgba("+parseFloat(rgbObject.r)+","+parseFloat(rgbObject.g)+","+parseFloat(rgbObject.b)+","+parseFloat(rgbObject.a)+")";

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
	}

	// -> Fix for IE
	setTimeout(updateSlider,1000);

	$rootScope.$watch(function(){
		return less.lastCSS + $rootScope.slider.namespace;
		},function(newVal,oldVal){
			if (newVal) {
				if ($rootScope.slider.namespace) {
					$rootScope.output = less.lastCSS.replace(/input\[type=range\]/g,'input[type=range].'+$rootScope.slider.namespace);
				} else {
					$rootScope.output = less.lastCSS;
				}
			}

		})

	$rootScope.less = less;

	$rootScope.slider = presets['Bootstrap'];

})
.directive("input",function($compile){
	return {
		restrict:"E",
		link:function(scope,elem,attrs){
			// console.log("An input",attrs.type);
			var container = elem.after("<div></div>").next();
			if (attrs.type && attrs.type.indexOf("/") > -1) {
				console.log("A split input",elem,attrs,elem.attr("class"));
				var types = attrs.type.split("/");
				types.forEach(function(type){

				// var input = elem.clone();
					var input = angular.element("<input>");

					for (var key in attrs) {
						if (key[0] !== "$") {
							input.attr(key,attrs[key]);
						}
					}
					input.attr("ng-model",attrs.ngModel);
					input.attr("class",elem.attr("class"));
					input.attr("type",type);
					input.attr("style","width:50%;display:inline-block;vertical-align:middle;")
					// input.attr("style","width:50%;display:inline-block;")
					$compile(input)(scope);
					container.append(input);
					// elem.after(angular.element("<input>"));
					// elem.after(angular.element("<p>splitty...</p>"));
				})
				elem.hide();
			} else {
				// console.log("not a split input,",attrs.$attr.type)
			}
		},
		// replace:true,
		// compile:function(element,attrs) {
		// 	if (attrs.nospawn) {
		// 		return "<div></div>";
		// 	}
		// },
		// scope:{
	 //        bindModel:'=ngModel'
	 //    },
	 //    template:function(tElem,tAttr){
		// // console.log("templating...",tAttr);
		// // var tmpl = "";
		
		// // var div = angular.element("<div>");
		// // div.append("<input>");
		// // var input = div.find("input");
		// // input.attr("ng-model",tAttr.bindModel);
		// // input.attr("nospawn",true);
		// // console.log("Returning...",div[0].outerHTML);
		// // return div[0].outerHTML;
		// return "<div inputholster></div>";
		// // return "";
		// }
	}
	})
// .directive("inputholster",function(){
// 	return {
// 		restrict:"AE",
// 		link:function(){

// 		}
// 	}
// 	})