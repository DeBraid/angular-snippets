'use strict';
/*
    Service that watches screen width
    @params: 
    _scope: $scope from original (callers) ctrl
    callback: function (uses width to set some value)
*/
angular.module('app').factory('widthService', widthService);

function widthService($window, $rootScope) {
    var w = angular.element($window);
    var width = w.width();
    w.bind('resize', function() {
        width = w.width();
        $rootScope.$apply();
    });
    return {
        getWidth: getWidth
    };

    function getWidth(_scope, callback) {
        _scope.$watch(function() {
            return width;
        }, callback);
    }
}