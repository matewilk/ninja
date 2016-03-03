'use strict';
export function resumeDialogController($scope, $mdDialog)
{
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.contents = [{
        title: 'Senior Web Developer',
        company: 'BBC',
        when: '2016 - present',
        responsibilities: [
            'Creating prototype and developing award winning BBC\'s Authentication Tool app.',
            'Creating prototype and taking active part in designing responsive version of BBC\'s CMS (iSite2)',
            'Developing responsive components and delivering new functionalities for the product (iSite2)',
            'Collaborating with other BBC\'s teams to ensure best product functionality and compatibility',

            'Advising the Product Manager or Technical Project Manager to ensure that all technical possibilities are explored and that products achieve the best possible look, feel and functionality',
            'Evaluating time needed to develop certain features and developing the features in a given timescale',
            'Suggesting and using solutions and libraries to shorten development time and/or effort',
            'Advise on strategic technology issues',
            'Assistance with recruitment',
            'Mentoring and coaching of less experienced members of the team',
            'Developing new features and products for the organisation',
            'Redesigning existing functionality using proven development methodologies, processes and patterns along with the latest technologies',
            'Estimating Stories (Agile Scrum) development time, breaking them down into tasks and making sure they are delivered in a given timeframe (Sprint) - panning and prioritizing tasks',
            'Resolving accessibility, usability and cross browser issues',
            'Working with 3rd party products/libraries',
            'Code reviews',
            'Pair programming'
        ],
        tools: [{
            name: 'JavaScript',
            tools: 'React.js, Node.js, Backbone.js, Express.js, ES5, ES6'
        },{
            name: 'Css',
            tools: 'Sass, Bootstrap, Angular-Material'
        },{
            name: 'Testing',
            tools: 'Behat, PhpUnit, Mocha, Chai, Sinon, Jasmine'
        },{
            name: 'Continuous Deployment/Integration',
            tools: 'Hudson, Heroku, AWS, Jenkins, AWS CodeDeploy & CodePipeline'
        },{
            name: 'Web Dev Tools',
            tools: 'Babel, Bower, Grunt, Vagrant, Webpack, Require, Yeoman, Jshint, JsLint, JsBin, Js minifiers and more'
        }],
        toolsIcon: 'developer_mode'
    }]
}
