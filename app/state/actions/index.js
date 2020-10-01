import { SET_LS_USER_NAME, SET_LS_TIME_FORMAT, SET_LS_SHORTCUT, CLEAR_LS} from "./actions-types";


//Local Storage actions
export function setLsUserNameAction(payload) {
return {type: SET_LS_USER_NAME, payload}
}

export function setLsTitleFormat(payload) {
return {type: SET_LS_TIME_FORMAT, payload}
}

export function setLsShortcut(payload) {
return {type: SET_LS_SHORTCUT, payload}
}

export function clearLsAction(payload) {
return {type: CLEAR_LS, payload}
}
