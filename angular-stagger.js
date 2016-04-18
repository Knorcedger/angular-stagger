/**
 * @description An angular service that pushes elements in an array with a delay to create staggering animations
 * @params scope: the controller scope
 *         arrayName: the array that will be created on the scope
 *         objects: the objects we want to be added in the array
 *         timeout: the timeout betweet object pushes
 */
var stagger = angular.module('stagger', []);

stagger.service('stagger', function($timeout) {
	return function(scope, arrayName, objects, timeout) {
		scope[arrayName] = [];
		var pushme = function(object) {
			return function() {
				scope[arrayName].push(object);
			};
		};

		for (var i = 0, length = objects.length; i < length; i++) {
			$timeout(pushme(objects[i]), i * timeout);
		}
	};
});
