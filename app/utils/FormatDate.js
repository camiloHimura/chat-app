import {INVALID_DATE} from '../contans/ErrorMessages';

export default function ({isHour12 = true, date}) {
  if (!Number.isInteger(date)) {
    throw Error(INVALID_DATE);
  }

  let options = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: isHour12};

  return new Intl.DateTimeFormat(navigator.language, options).format(date);
}