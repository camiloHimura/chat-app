import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers";
import {localStorageMiddleware} from "../middleware"
import ReduxThunk from "redux-thunk"

const store = createStore(
  rootReducer,
  applyMiddleware(localStorageMiddleware, ReduxThunk)
);

export default store;
