'use strict';
export function bottomSheetController($scope, $mdBottomSheet, $document)
{
    $scope.closeMenu = function(idSuffix, $event){
        $mdBottomSheet.hide();
    }
}
