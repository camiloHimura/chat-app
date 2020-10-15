import {
  RESET_SETTINGS,
  SET_TOGGLE,
  SAVE_SETTINGS,
} from "../actions/actions-types";
import { SETTINGS } from "../../contans";
import LStorage from "../../utils/LStorage";

export default function localStorageReducer(state, action) {
  if (state === undefined) {
    state = LStorage.has(SETTINGS.LS_NAME)
      ? LStorage.get(SETTINGS.LS_NAME)
      : SETTINGS.DEFAULTS;
  }

  switch (action.type) {
    case SET_TOGGLE:
      return { ...state, open: action.payload };

    case SAVE_SETTINGS:
      return { ...state, ...action.payload };

    case RESET_SETTINGS:
      return { ...SETTINGS.DEFAULTS, open: state.open };

    default:
      return state;
  }
}
