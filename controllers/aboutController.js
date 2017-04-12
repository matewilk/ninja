'use strict';
export function aboutController($scope, $http)
{
    $scope.showmore = true;

    $scope.currentRole = {
        title: 'Senior/Lead Software Engineer',
        location: 'London/Slough',
        company: 'O2/Telefonica',
        education: 'Master Degree in CS, 8+ years of professional experience'
    };

    $scope.keySkills = {
        programming: 'ES6, vanilla js, React.js, Angular.js, Node.js, Express.js, jQuery, Backbone.js',
        testing: 'TDDs, BDDs, jasmine, mocha, karma, sinon, chai, browser stack, phantomjs ',
        ci: 'AWS, Jenkins, Code Deploy, Code Pipeline, bash scripting',
        soft: 'Agile Scrum, various project development processes, mentoring'
    };

    $scope.$watch('skills', function (newVal, oldVal) {
        //can't refer to the oldVal as it creates infinite loop
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
