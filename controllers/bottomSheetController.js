'use strict';
export function bottomSheetController($scope, $mdBottomSheet, $document)
{
    $scope.closeMenu = function(idSuffix, $event){
        $mdBottomSheet.hide();
    }

    $scope.items = [
        {
            icon: 'account_circle',
            label: 'About',
            href: '#section-main'
        },
        {
            icon: 'lightbulb_outline',
            label: 'Experience',
            href: '#section-2'
        },
        {
            icon: 'style',
            label: 'My Tags',
            href: '#section-3'
        },
        {
            icon: 'contact_mail',
            label: 'Contact',
            href: '#section-4'
        }

    ]
}
