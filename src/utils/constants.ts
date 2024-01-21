import {Dimensions} from 'react-native';
import {icons} from './icons';

export const MIN_STRING_LENGTH_TO_START_SEARCH = 3;
export const DEBOUNCE_DELAY = 500;
export const TOAST_DURATION = 3000;
export const LOADER_SIZE = 48;
export const LOADER_POPUP_SIZE = 144;
export const LOADER_POPUP_BORDER_RADIUS = 16;
export const SPLASH_SCREEN_DISPLAY_TIME: number = 3000;
export const DEFAULT_ORIENTATION = 'portrait';
export const WELCOME_STEPS = [
  {
    title: 'welcome.step_one.title',
    subtitle: 'welcome.step_one.subtitle',
    image: icons.WELCOME_STEP_ONE,
  },
  {
    title: 'welcome.step_two.title',
    subtitle: 'welcome.step_two.subtitle',
    image: icons.WELCOME_STEP_TWO,
  },
  {
    title: 'welcome.step_three.title',
    subtitle: 'welcome.step_three.subtitle',
    image: icons.WELCOME_STEP_THREE,
  },
];
export const ACTIVE_WELCOME_STEP_SIZE: number = 8;
export const INACTIVE_WELCOME_STEP_SIZE: number = 4;
export const WELCOME_STEPS_HORIZONTAL_MARGIN: number = 6;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const APIKEY = {
  'X-Api-Key': 'In7i+Klv+yw/SMcoYIqzwQ==jNyR4DE6Lr5VVpoy',
};

export const EMPTY_RESULT_TEXT =
  'No city found with this name, please enter a valid city name and try again ...';
