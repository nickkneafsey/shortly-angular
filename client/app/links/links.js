angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function (data) {
    $scope.data.links = data;
  });

  $scope.logout = function () {
    Auth.signout();
  };
});
