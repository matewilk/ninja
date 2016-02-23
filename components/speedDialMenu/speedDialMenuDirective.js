'use strict';

import {SpeedDialMenuController} from './speedDialMenuController'

export function speedDialMenu() {
    return {
        controller: SpeedDialMenuController,
        controllerAs: 'controller',
        scope: true,
        template: require('./speedDialMenu.html')
  };
}
