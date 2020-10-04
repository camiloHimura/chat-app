import {INVALID_URL} from '../contans/ErrorMessages';

export default function (url) {
  if (typeof url !== 'string') {
    throw Error(INVALID_URL);
  }

  let isURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  let isValidFormat = /(png|jpg|gif)+$/i;
  
  return isURL.test(url) && isValidFormat.test(url);
}
