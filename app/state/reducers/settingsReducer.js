import { SET_USER_NAME, SET_TIME_FORMAT, SET_SHORTCUT, RESET_SETTINGS, SET_TOGGLE } from '../actions/actions-types';
import { SETTINGS } from '../../contans';
import LStorage from '../../utils/LStorage';

export default function localStorageReducer(state, action) {
  if(state === undefined){
    state = LStorage.has(SETTINGS.LS_NAME)? LStorage.get(SETTINGS.LS_NAME): SETTINGS.DEFAULTS;
  }

  switch(action.type){
    case SET_TOGGLE:
      return {...state, open: action.payload};
    
    case SET_USER_NAME:
      return {...state, userName: action.payload};
    
    case SET_TIME_FORMAT:
      return {...state, timeFormat: action.payload};
    
    case SET_SHORTCUT:
      return {...state, shortcut: action.payload};
    
    case RESET_SETTINGS:
      return {...SETTINGS.DEFAULTS, open: state.open};
    
    default: 
        return state;
  }
}