import { SET_LS_USER_NAME, SET_LS_TIME_FORMAT, SET_LS_SHORTCUT, CLEAR_LS } from '../actions/actions-types';
import { SETTINGS, SETTINGS_DEFAULTS } from '../../contans/LStorageNames';
import LStorage from '../../utils/LStorage';

export default function localStorageReducer(state, action) {
  if(state === undefined){
    state = LStorage.has(SETTINGS)? LStorage.get(SETTINGS): SETTINGS_DEFAULTS;
  }

  switch(action.type){
    case SET_LS_USER_NAME:
      return {...state, userName: action.payload}
    
    case SET_LS_TIME_FORMAT:
      return {...state, timeFormat: action.payload}
    
    case SET_LS_SHORTCUT:
      return {...state, shortcut: action.payload}
    
    case CLEAR_LS:
      return SETTINGS_DEFAULTS
    
    default: 
        return state;
  }
}