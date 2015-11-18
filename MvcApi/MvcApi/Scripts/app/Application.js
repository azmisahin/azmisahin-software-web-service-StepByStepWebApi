var Application = angular.module('Application', ['angular-loading-bar'])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
    }])
    .controller('Name', NameFactory);

function NameFactory($scope, $http) {
    $http.get('/api/test').success(Response);
    function Response(data, status, headers, configs)
    {
        $scope.title = "Angular Module Application Test " + data;
    }    
}