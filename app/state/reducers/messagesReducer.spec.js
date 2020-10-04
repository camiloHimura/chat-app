import {addMessage} from '../actions';
import messagesReducer from './messagesReducer';
jest.mock('socket.io-client');

const message = {
  date: Date.now(), 
  user: 'guest', 
  isLocal: true, 
  text: '6 test text', 
  url: ''
}

describe('Message', () => {
  it('deafult', () => {
    const newState = messagesReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('adding', () => {
    let newState = messagesReducer(undefined, addMessage(message));
        newState = messagesReducer(newState, addMessage(message));
    expect(newState).toEqual([message, message]);
  });
});
