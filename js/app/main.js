/* kickstart 28-08-2014 */
/* Author: Jetz Alipalo */
var nameApp = angular.module("nameApp", []);

nameApp.controller("NameCtrl", function($scope) {
    $scope.enteredName = "", $scope.addName = function() {
        if ("" === $scope.enteredName) alert("please enter name"); else {
            for (var addToArray = !0, i = 0; i < $scope.names.length; i++) $scope.names[i] === $scope.enteredName && (addToArray = !1, 
            alert("Name exist"));
            addToArray && $scope.names.push($scope.enteredName), $scope.enteredName = "";
        }
    }, $scope.names = [ "Larry", "Curly", "Moe" ], $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    };
});