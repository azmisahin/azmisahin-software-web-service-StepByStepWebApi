var Welcome = angular.module('Welcome', []).controller('Hello', HelloFactory);

function HelloFactory($scope) {
    $scope.title = "Good Moorning";
}