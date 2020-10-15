import { RESET_SETTINGS, SAVE_SETTINGS } from "../actions/actions-types";
import { SETTINGS } from "../../contans";
import LStorage from "../../utils/LStorage";

export default function settingsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === RESET_SETTINGS) {
        LStorage.set(SETTINGS.LS_NAME, SETTINGS.DEFAULTS);
      }

      if (action.type === SAVE_SETTINGS) {
        LStorage.set(SETTINGS.LS_NAME, { ...action.payload });
      }

      return next(action);
    };
  };
}

function updateState(data) {
  return Object.assign({}, LStorage.get(SETTINGS), data);
}
