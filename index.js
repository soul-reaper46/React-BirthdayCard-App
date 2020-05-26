/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Second from './Second';
import App from './App';
import Navigation from './navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
