'use strict';
export function contactController($scope, $http, $mdBottomSheet)
{
    $scope.submit = function(form) {
      $http({
          method: 'POST',
          url: '/api/send',
          data: $scope.contact,
          headers: { 'Content-Type': 'application/json' }
      })
      .success(function(data) {
          $scope.reset(form);
          $mdBottomSheet.show({
              template: require('../views/components/sendSuccess.html'),
              disableParentScroll: false
          });
      })
      .error(function(data) {
          $mdBottomSheet.show({
              template: require('../views/components/sendError.html'),
              disableParentScroll: false
          });
      });

      setTimeout(function(){
          $mdBottomSheet.hide();
      }, 3000)
    };

    $scope.contact = {
        name: null,
        email: null,
        subject: null,
        message: null
    }

    $scope.reset = function(form) {
        $scope.contact = {
            name: null,
            email: null,
            subject: null,
            message: null
        }
        form.$setPristine();
        form.$setUntouched();
        form.$valid = false;
        form.$invalid = true;
        form.$error = {};

        // form.$setPristine(true);
        // form.$setUntouched(true);

        // iterate over all from properties
        // angular.forEach(form, function(ctrl, name) {
        //   // ignore angular fields and functions
        //   if (name.indexOf('$') != 0) {
        //     // iterate over all $errors for each field
        //     angular.forEach(ctrl.$error, function(value, name) {
        //       // reset validity
        //       ctrl.$setValidity(name, null);
        //     });
        //   }

        //   let controlNames = Object.keys(form).filter(key => key.indexOf('$') !== 0);
        //   for (let name of controlNames) {
        //       let control = form[name];
        //       control.$setViewValue(undefined);
        //   }
        //});
    };
}
