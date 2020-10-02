import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import {settingsMiddleware} from "../middleware"
import ReduxThunk from "redux-thunk"

const store = createStore(
  rootReducer,
  applyMiddleware(settingsMiddleware, ReduxThunk)
);

export default store;
