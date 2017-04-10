export default function ($scope, $mdSidenav, $log, $document, $mdMedia, $mdDialog, $http, $mdBottomSheet)
{
    $scope.toggleLeft = buildToggler('left');
    $scope.isOpenLeft = function(){
        return $mdSidenav('left').isOpen();
    };
    $scope.close = function () {
        $mdSidenav('left').close()
    };

    function buildToggler(navID) {
        return function() {
            $mdSidenav(navID).toggle()
        }
    }

    $scope.downloadResume = function($event) {
        $event.preventDefault();
        $http({
            url : '/api/resume',
            method : 'POST',
            params : {},
            headers : {
                'Content-type' : 'application/pdf',
            },
            responseType : 'arraybuffer'
        })
        .success(function(data, status, headers, config) {
            var file = new Blob([ data ], {
                type : 'application/pdf'
            });
            //trick to download store a file having its URL
            var fileURL = URL.createObjectURL(file);
            var a         = document.createElement('a');
            a.href        = fileURL;
            a.target      = '_blank';
            a.download    = 'mateusz_wilk_resume.pdf';
            document.body.appendChild(a);
            a.click();
        }).error(function(data, status, headers, config) {
            $mdBottomSheet.show({
                template: require('../views/components/sendError.html'),
                disableParentScroll: false
            });
            setTimeout(function(){
                $mdBottomSheet.hide();
            }, 3000)
        });
    }

    $scope.showAdvanced = function(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        $mdDialog.show({
              controller: 'ResumeDialogController',
              template: require('../views/components/resumeDialog.html'),
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: useFullScreen
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };

	$scope.side = '';

	$scope.events = [{
    badgeClass: 'info',
    side: 'Left',
		badgeIconClass: 'keyboard',
		title: 'Senior/Lead Software Engineer',
    company: 'O2',
		when: 'May 2016 - present',
		content: [
        'Leading technical and architectural design of the product',
        'Fast prototyping first versions of the application',
        'Setting up quality standards for the team',
        'Leading on developing substantial components of the product including database, API and UI areas',
        'Prototyping crucial components',
        'Spreading best practices across the team including programming, agile methodologies, product development approach and development workflow',
        'Setting up Continuous Integration workflow, environment and pipeline'
    ],
    tools: 'ES6, React.js, Angular.js, Node.js, Express.js, Jasmine.js, Sinon, Chai, Mocha, Jenkins, Webpack, AWS',
    toolsIcon: 'keyboard'
  },{
		badgeClass: 'info',
    side: 'Right',
		badgeIconClass: 'keyboard',
		title: 'Senior Web Developer',
    company: 'BBC',
		when: 'until May 2016',
		content: [
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
        'Redesigning existing functionality using proven development methodologies, processes and patterns along with the latest technology',
        'Estimating Stories (Agile Scrum) development time, breaking them down into tasks and making sure they are delivered in a given timeframe (Sprint) - panning and prioritizing tasks',
        'Resolving accessibility, usability and cross browser issues',
        'Working with 3rd party products/libraries'
    ],
    long: true,
    tools: 'Plain Javascript, React.js, Node.js, Backbone.js, Require.js, Express.js, ES6, ' +
    'Sass, Bootstrap, Angular-Material, ' +
    'Behat, PhpUnit, Mocha, Chai, Sinon, Jasmine, ' +
    'Hudson, Heroku, AWS, Jenkins, AWS CodeDeploy and CodePipeline, ' +
    'Bower, Grunt, Vagrant, Webpack, Require, Yeoman, Jshint, JsLint, JsBin, Js minifiers and more ...',
    toolsIcon: 'developer_mode'
	},{
		badgeClass: 'warning',
    side: 'Left',
		badgeIconClass: 'import_contacts',
		title: 'Courses',
    company: 'BBC',
		when: '2014 - 2016',
		content: [
        'Code Reviews',
        'Continuous Integration',
        'Pair Programming',
        'Behavioral Driven Development',
        'Test Driven Development',
        'HTML5 for Mobile and Web',
        'Microservices',
        'Agile Scrum'
    ]
	},{
		badgeClass: 'warning',
    side: 'Right',
		badgeIconClass: 'border_color',
		title: 'Independent Coursework and Conferences',
		when: '2014 - 2015',
		content: [
        'AWS:reInvent 2015 conference Las Vegas',
        'MongoDB for Node.js Developers',
        'Node.js meet-ups',
        'React.js meet-ups',
        'Backbone.js meet-ups',
        'Meet.js meet-ups',
        'Front-Trends 2013 & 2014 conference'
    ]
	},{
		badgeClass: 'info',
    side: 'Left',
		badgeIconClass: 'keyboard',
		title: 'Web Developer',
    company: 'BBC',
		when: '2014 - 2015',
		content: [
        'Front-end development of BBC\'s CMS (iSite2) used by Programmes, Sport, Blogs, Children in Need, Learning English and other BBC pages',
        'Developing new functionalities and modifying existing ones',
        'Improving code modularity, usability and testability',
        'Rewriting legacy code using latest technologies into more maintanable modules',
        'Moving logic from back to front-end',
        'Code reviews',
        'Pair programming'
    ],
    tools: 'React.js, Node.js, Backbone.js, Require.js, Express.js, Jasmine.js, Hudson, Grunt, Zend Framework, Bootstrap',
    toolsIcon: 'keyboard'
	},{
		badgeClass: 'info',
    side: 'Right',
		badgeIconClass: 'turned_in_not',
		title: 'Software Developer',
    company: 'Arbor Education',
		when: '2013 - 2014',
		content: [
        'Student benchmarking, analytics, and Management Information Systems for schools development',
        'GUI implementation',
        'Responsive components development'
    ],
    tools: 'Javascript, ExtJs, PHP, Zend Framework',
    toolsIcon: 'mouse'
	},{
		badgeClass: 'info',
    side: 'Left',
		badgeIconClass: 'headset_mic',
		title: 'Web/Javascript Developer',
    company: 'Focus Telecom',
		when: '2010 - 2013',
		content: [
        'Development, modifications and new functionality implementation in Javascript based CRM',
        'Call center system development',
        'Front-end components implementation',
        'User interface desing & usability design',
        'Data visualization',
        'GUI implementation',
        'Application architecture implementation',
        'Back-end and SQL development',
        'Full responsibility over one of the main company\'s products'
    ],
    tools: 'Javascript, ExtJs, jQuery, css, html, PHP, Zend Framework, DbDesigner, PostgreSQL',
    toolsIcon: 'developer_mode'
	},{
		badgeClass: 'info',
    side: 'Right',
		badgeIconClass: 'cast_connected',
		title: 'Programmer Javascript/PHP/SQL',
    company: 'Expanse',
		when: '2009 - 2010',
		content: [
        'Vehicle monitoring, controll and localization application development',
        'GUI implementation',
        'Application architecture implementation',
        'Database design assistance',
        'Writing SQL queries and procedures'
    ],
    tools: 'Javascript, ExtJs, Ajax, PHP, Zend Framework, DbDesigner, PostgreSQL',
    toolsIcon: 'keyboard'
	}, {
		badgeClass: 'info',
    side: 'Left',
		badgeIconClass: 'videogame_asset',
		title: 'Freelancer Web enthusiast',
		when: '2008 - 2009',
		content: [
        'Web services functionality development and modification',
        'Templates and forms creation',
        'Scripting',
        'Web pages development',
        'Web shops modification'
    ],
    tools: 'PHP, HTML, CSS, JavaScript',
    toolsIcon: 'videogame_asset'
	}, {
		badgeClass: 'warning',
    side: 'Right',
		badgeIconClass: 'school',
		title: 'Master of Science',
		when: '2009',
		content: ['Mail client with artifical inteligence adaptive anti spam filtering algorithm'],
    tools: 'Javascript, PHP, SQL',
    toolsIcon: 'memory'
	}, {
		badgeClass: 'info',
    side: 'Left',
		badgeIconClass: 'star',
		title: 'IT intern',
    company: 'Inoxpa Spain',
		when: '2007 - 2008',
		content: [
        'Share Point Services 3.0 implementation and server administration',
        'Users intervies and UML diagrams development',
        'System requirements analysis'
    ],
    tools: 'Visual Studio .NET, Microsoft Windows Server 2005, Miscrosoft Web Developer',
    toolsIcon: 'developer_board'
	}, {
		badgeClass: 'warning',
    side: 'Right',
		badgeIconClass: 'public',
		title: 'IAESTE Scholarship program',
    company: 'Universitat de Girona',
		when: '2007 - 2008',
		content: ['Faculty of Information and Computer Science']
	}, {
		badgeClass: 'warning',
    side: 'Left',
		badgeIconClass: 'school',
		title: 'Techical University of Lodz',
		when: '2003 - 2009',
		content: [
        'Faculty of Electrical, Electronic, Computer and Control Engineering.',
        'Member of Microprocessor Autonomous Systems Academic Club - MIPSA.'
    ]
	}];
}
