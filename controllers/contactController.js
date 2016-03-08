'use strict';
export function contactController($scope, $http, $mdBottomSheet)
{
    $scope.loading = false;
    var ajaxCallback = function(data, status, success, form){
        $scope.loading = false;
        var template = 'Error';
        if(success === true && status === 200){
            $scope.reset(form);
            template = 'Success';
        }

        $mdBottomSheet.show({
            template: require('../views/components/send'+template+'.html'),
            disableParentScroll: false
        }).then(function(){
            setTimeout(function(){
                $mdBottomSheet.hide();
            }, 3000)
        });
    }

    $scope.submit = function(form) {
        $scope.loading = true;
        $http({
            method: 'POST',
            url: '/api/send',
            data: $scope.contact,
            headers: { 'Content-Type': 'application/json' }
        })
        .success(function(data, status){
            ajaxCallback(data, status, true, form);
        })
        .error(function(data, status){
            ajaxCallback(data, status, false);
        });
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
    };
}
