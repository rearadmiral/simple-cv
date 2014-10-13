var simpleCvApp = angular.module('simpleCvApp', ['ui.gravatar']);

simpleCvApp.controller('cvCtrl', function ($scope) {
  $scope.subject = simpleCvExample.subject;
});
