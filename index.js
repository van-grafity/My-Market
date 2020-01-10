/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Index from './app/src/index'


AppRegistry.registerComponent(appName, () => Index);
