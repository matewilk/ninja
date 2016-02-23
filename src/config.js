import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import mainController from '../controllers/mainController'

const app = angular.module('app', [uiRouter, angularMaterial]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {
            url: '/',
            template: require('../views/main.html')
        });
    $locationProvider.html5Mode(true);
})
.controller('MainCtrl', mainController);

export default app;
