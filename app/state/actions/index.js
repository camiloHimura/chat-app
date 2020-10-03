import { SET_USER_NAME, SET_TIME_FORMAT, SET_SHORTCUT, RESET_SETTINGS, SET_TOGGLE, ADD_MS} from "./actions-types";

//Setting
export function setUserName(payload) {
  return {type: SET_USER_NAME, payload}
}

export function setTimeFormat(payload) {
  return {type: SET_TIME_FORMAT, payload}
}

export function setShortcut(payload) {
  return {type: SET_SHORTCUT, payload}
}

export function resetSettings(payload) {
  return {type: RESET_SETTINGS, payload}
}

export function toggleSettings(payload) {
  return {type: SET_TOGGLE, payload}
}

//Message
export function addMessage(payload) {
  return {type: ADD_MS, payload}
}