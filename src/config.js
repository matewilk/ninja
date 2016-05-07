import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import angularMaterial from 'angular-material';
import mainController from '../controllers/mainController';
import {mobileController} from '../controllers/mobileController';
import {resumeDialogController} from '../controllers/resumeDialogController';
import {bottomSheetController} from '../controllers/bottomSheetController';
import {speedDialMenu} from '../components/speedDialMenu/speedDialMenuDirective';
import {contactController} from '../controllers/contactController';
import {aboutController} from '../controllers/aboutController';

const app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMessages,
    'duScroll',
    'ngAnimate',
    'angular-timeline',
    'angular-inview',
]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html'
        });
    $locationProvider.html5Mode(true);
})
.controller('MainCtrl', mainController)
.controller('BottomSheetController', bottomSheetController)
.controller('MobileController', mobileController)
.controller('ResumeDialogController', resumeDialogController)
.controller('ContactController', contactController)
.controller('AboutController', aboutController)
.directive('speedDialMenu', speedDialMenu);

export default app;
