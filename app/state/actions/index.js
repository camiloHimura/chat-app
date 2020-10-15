import {
  RESET_SETTINGS,
  SET_TOGGLE,
  SAVE_SETTINGS,
  ADD_MS,
} from "./actions-types";

//Setting

export function saveSettings(payload) {
  return { type: SAVE_SETTINGS, payload };
}

export function resetSettings(payload) {
  return { type: RESET_SETTINGS, payload };
}

export function toggleSettings(payload) {
  return { type: SET_TOGGLE, payload };
}

//Message
export function addMessage(payload) {
  return { type: ADD_MS, payload };
}
