gesturesApp.controller('menu.controller', ['modes.modesService', '$scope', function(modesService, $scope) {

    $scope.modes = modesService.getModes();

}]);