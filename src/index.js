import angular from 'angular';

/* styles */
import '../styles/main.scss'
import '../node_modules/angular-material/angular-material.scss';
import '../node_modules/material-design-icons/iconfont/material-icons.css'

import appModule from './config';

angular.bootstrap(document, [appModule.name]);
