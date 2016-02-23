'use strict';
export function SpeedDialMenuController($scope, $timeout, $mdBottomSheet) {

    // Speed Dial Menu (gt-xs)
    $scope.closeMenu = function () {
        $scope.controller.isOpen = false;
    };
    this.isOpen = false;
    //availableModes 'md-fling', 'md-scale';
    this.selectedMode = 'md-scale';
    // availableDirections 'up', 'down', 'left', 'right';
    this.selectedDirection = 'left';
    this.tipDirection = 'bottom';

    $scope.$watch('controller.isOpen', function() {
        $timeout(function() {
            $scope.controller.tooltipsVisible = $scope.controller.isOpen;
        }, 500);

        var button = angular.element(document.querySelector('#resume-button'));
        button.toggleClass('md-primary').toggleClass('md-accent');
    });
}
