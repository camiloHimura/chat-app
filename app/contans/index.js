import * as ERROR_MESSAGES from './ErrorMessages.js';

const PORT = 3000;
const API_URL = process.env.API_URL || `http://localhost:${PORT}/api`;


export {
  PORT,
  API_URL,
  API_TIMEOUT,
  SETTINGS,
  ERROR_MESSAGES
};
