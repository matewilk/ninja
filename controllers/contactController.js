'use strict';
export function contactController($scope, $http)
{
    $scope.submit = function() {
      $http({
          method: 'POST',
          url: '/api/send',
          data: $scope.contact,
          headers: { 'Content-Type': 'application/json' }
      })
      .success(function(data) {
          console.log('success');
      })
      .error(function(data) {
          console.log('error');
      });
    };

    $scope.reset = function() {
      $scope.contact = {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
    $scope.reset();
}
