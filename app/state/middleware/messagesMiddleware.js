import { ADD_MS } from '../actions/actions-types';
import LStorage from '../../utils/LStorage';
import { IO_SEND_MESSAGE, SOCKET } from '../../contans';

export default function messagesMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {

      if(action.type === ADD_MS && action.payload.isLocal) {
        SOCKET.emit(IO_SEND_MESSAGE, action.payload);
      }

      return next(action);
    }
  }
}
