import {INVALID_URL} from '../contans/ErrorMessages';

export default function (data) {
  if (typeof data !== 'string') {
    throw Error(INVALID_URL);
  }

  if (data === '') {
    return false;
  }

  let isURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  
  if (!isURL.test(data)) {
    return false;
  }
  
  const url = new URL(data);
  let isValidFormat = /(png|jpg|gif)+$/i;

  //url.pathname remove query string
  return isValidFormat.test(url.pathname);
}
