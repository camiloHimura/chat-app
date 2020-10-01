import { SET_LS_URL, SET_LS_TITLE, SET_LS_TAGS, CLEAR_LS } from "../actions/actions-types";
import { SETTINGS, SETTINGS_DEFAULTS } from '../../contans/LStorageNames';
import LStorage from "../../utils/LStorage";

export default function localStorageMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if(action.type === CLEAR_LS) {
        LStorage.set(SETTINGS, SETTINGS_DEFAULTS);
      }

      return next(action);
    }
  }
}

function updateState(data){
 return Object.assign({}, LStorage.get(SETTINGS), data);
}