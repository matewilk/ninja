'use strict';
export function aboutController($scope, $http)
{
    $scope.showmore = true;

    $scope.user = {
        title: 'Senior Web Developer',
        location: 'London',
        company: 'BBC'
    }

    $scope.$watch('skills', function(newVal, oldVal){
        //can't refer to the oldVal as it will create infinite loop
        $scope.skills = {
            javascript: 85,
            html: 80,
            css: 80
        }
    }, true);
}
