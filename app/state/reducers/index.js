import {combineReducers} from 'redux';

import settings from './settingsReducer';
import messages from './messagesReducer';

export default combineReducers({
  settings,
  messages,
});
