var simpleCvApp = angular.module('simpleCvApp', ['ui.gravatar']);

simpleCvApp.controller('cvCtrl', function ($scope) {
  $scope.subject = simpleCvExample.subject;
  $scope.subject.identities = Identities.fromJson(simpleCvExample.subject.identities);
  $scope.portfolio = simpleCvExample.portfolio;
});
