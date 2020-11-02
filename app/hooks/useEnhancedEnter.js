import { KEY_ENTER } from "../contans";
import useEnter from "./useEnter";

export default (isRegularEnter, onEnter) => {
  const enterHandler = useEnter(onEnter);

  function handler(event) {
    if (isRegularEnter) {
      enterHandler(event);
    }

    const isControlPress = event.ctrlKey || event.metaKey;
    if (!isRegularEnter && isControlPress && event.keyCode === KEY_ENTER) {
      event.preventDefault();
      onEnter();
    }
  }

  return handler;
};
