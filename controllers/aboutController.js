'use strict';
export function aboutController($scope, $http)
{
    $scope.showmore = true;

    $scope.currentRole = {
        title: 'Senior/Lead Software Engineer',
        location: 'London/Slough',
        company: 'O2/Telefonica'
    };

    $scope.prevRole = {
        title: 'Senior Web Developer',
        location: 'London',
        company: 'BBC'
    };

    $scope.$watch('skills', function (newVal, oldVal) {
        //can't refer to the oldVal as it will create infinite loop
        $scope.skills = {
            javascript: 85,
            htmlcss: 80,
            ciagile: 75,
            tddbdd: 82
        }
    }, true);

    $scope.about = {
        first: 'I\'m a strong advocate of extreme programming and agile methodologies.'+
            'Testability, maintainability, modularity and usability is a hight priority to me. '+
            'JavaScript is one of the most flexible and powerful langueages out there, but with great power, comes great responsibility.',
        second: 'A JavaScript framework is a tool for me, not the holy grail of best practices, '+
            'they all solve same issues in different ways! If you ask me which framework to choose or which one is the best, '+
            'I\'ll first ask, what\'s the problem.',
        third: 'Please, be my guest and check out the page, hope you\'ll find what are you looking for. Enjoy!'
    }

}
