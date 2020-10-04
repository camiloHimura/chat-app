import { SET_USER_NAME, SET_TIME_FORMAT, SET_SHORTCUT, RESET_SETTINGS } from '../actions/actions-types';
import { SETTINGS } from '../../contans';
import LStorage from '../../utils/LStorage';

export default function settingsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      
      if(action.type === RESET_SETTINGS) {
        LStorage.set(SETTINGS.LS_NAME, SETTINGS.DEFAULTS);
      }

      if(action.type === SET_USER_NAME) {
        const data = LStorage.get(SETTINGS.LS_NAME) || {};
        LStorage.set(SETTINGS.LS_NAME, {...data, userName: action.payload});
      }
      
      if(action.type === SET_TIME_FORMAT) {
        const data = LStorage.get(SETTINGS.LS_NAME) || {};
        LStorage.set(SETTINGS.LS_NAME, {...data, timeFormat: action.payload});
      }

      if(action.type === SET_SHORTCUT) {
        const data = LStorage.get(SETTINGS.LS_NAME) || {};
        LStorage.set(SETTINGS.LS_NAME, {...data, shortcut: action.payload});
      }

      return next(action);
    }
  }
}

function updateState(data){
 return Object.assign({}, LStorage.get(SETTINGS), data);
}