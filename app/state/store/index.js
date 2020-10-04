import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { settingsMiddleware, messagesMiddleware } from '../middleware'

const store = createStore(
  rootReducer,
  applyMiddleware(settingsMiddleware, messagesMiddleware, ReduxThunk)
);

export default store;
