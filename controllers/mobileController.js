'use strict';
export function mobileController($scope, $mdBottomSheet, $document)
{
    $scope.controller.isOpenBottom = false;
    $scope.openBottomMenu = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $mdBottomSheet.show({
            template: require('../views/components/bottomSheetMenu.html'),
            controller: 'BottomSheetController',
            disableParentScroll: false
        });
        $scope.controller.isOpenBottom = false;
    };
}
