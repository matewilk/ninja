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

    $scope.about = {
        first: 'I\'m a strong advocate of extreme programming and agile methodologies.'+
            'I\'m a programmer for a while now, and I\'m very happy to say that the level I\'m on has been eveluated as senior.',
        second: 'A JavaScript framework is a tool for me, not the holy grail of best practices,'+
            'they all solve same issues in different ways! If you ask me which framework to choose or which one is the best,'+
            'I\'ll first ask, what\'s the problem.',
        third: 'Please, be my guest and check out the page, hope you\'ll find what are you looking for. Enjoy!'
    }

}
