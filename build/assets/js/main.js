
//Use strict
//-------------------------------/
var nameApp = angular.module('nameApp',  []);

nameApp.controller('NameCtrl', function ($scope) {

    $scope.names = ['Larry', 'Curly', 'Moe'];

    $scope.enteredName = "";

    $scope.addName = function() {
        if ($scope.enteredName === "") {

            alert('please enter name')

        } else {

            var addToArray = true;

            for(var i = 0; i < $scope.names.length; i++) {
                //console.log($scope.names[i].text)
                if($scope.names[i] === $scope.enteredName) {
                    addToArray = false;
                    alert('Name exist')
                }
            }

            if (addToArray) {
                $scope.names.push($scope.enteredName);
            }
            $scope.enteredName = ""

        }

    };


    $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    };

});

