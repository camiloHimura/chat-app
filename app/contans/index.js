import * as ERROR_MESSAGES from './ErrorMessages.js';
import * as SETTINGS from './Settings';

const PORT = 3000;
const TIME_12 = '12';
const TIME_24 = '24';
const API_URL = process.env.API_URL || `http://localhost:${PORT}/api`;


export {
  PORT,
  API_URL,
  ERROR_MESSAGES,
  SETTINGS,
};
