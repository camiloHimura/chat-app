import * as ERROR_MESSAGES from './ErrorMessages.js';
import * as SETTINGS from './Settings';

const PORT = 3000;
const API_URL = process.env.API_URL || `http://localhost:${PORT}/api`;
const KEY_ENTER = 13;

export {
  PORT,
  API_URL,
  SETTINGS,
  KEY_ENTER,
  ERROR_MESSAGES,
};
