import angular from 'angular';

/* libs */
import 'angular-scroll';
import 'angular-animate';
import 'angular-timeline/dist/angular-timeline.js';
import 'angular-timeline/dist/angular-timeline.scss';
import 'angular-inview/angular-inview';

/* styles */
import '../styles/main.scss';
import '../node_modules/angular-material/angular-material.scss';
import '../node_modules/material-design-icons/iconfont/material-icons.css';

/* app */
import appModule from './config';

angular.bootstrap(document, [appModule.name]);
