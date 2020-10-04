import socketIOClient from 'socket.io-client';
import * as ERROR_MESSAGES from './ErrorMessages.js';
import * as SETTINGS from './Settings';

const PORT = process.env.PORT || 3000;
const API_URL = process.env.API_URL || `http://localhost:8082`;
const KEY_ENTER = 13;
const IO_BROADCAST = 'IOBroadcast';
const IO_SEND_MESSAGE = 'IONewMessage';
const SOCKET = socketIOClient(API_URL);

export {
  PORT,
  SOCKET,
  API_URL,
  SETTINGS,
  KEY_ENTER,
  IO_BROADCAST,
  ERROR_MESSAGES,
  IO_SEND_MESSAGE,
};
