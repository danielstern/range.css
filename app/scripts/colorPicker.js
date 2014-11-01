angular.module("colorPicker", []).directive("colorPicker", function () {
    return {
        restrict: "AE",
        templateUrl: 'partials/color-picker.html',
        scope: {
            color: "="
        },
        controller: function ($scope, rgbToHex, hexToRgb) {
            $scope.$watch('color', function (color) {
                if (color) {
                    $scope.alpha = color.a;
                    $scope.hex = rgbToHex($scope.color.r, $scope.color.g, $scope.color.b);
                    $scope.hex = "#" + $scope.hex;
                }
            }, true);

            $scope.$watch('hex', function (hex) {
                if (!hex) {
                    return;
                }
                try  {
                    var color = hexToRgb(hex, $scope.alpha);
                    $scope.color = color;
                } catch (e) {
                    console.warn("Invalid color");
                }
            });
        }
    };
}).service("rgbToHex", function () {
    function hexstr(number) {
        var chars = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
        var low = number & 0xf;
        var high = (number >> 4) & 0xf;
        return "" + chars[high] + chars[low];
    }

    function sixToThree(str) {
        if (str[0] === str[1] && str[2] === str[3] && str[4] === str[5]) {
            return str[0] + str[2] + str[4];
        } else {
            return str;
        }
    }

    return function rgbToHex(r, g, b) {
        return sixToThree(hexstr(r) + hexstr(g) + hexstr(b));
    };
}).service("hexToRgb", function () {
    return function hexToRgb(hex, alpha) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: (alpha === undefined) ? 1 : alpha
        } : null;
    };
});
