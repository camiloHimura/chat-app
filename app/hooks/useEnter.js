import { useEffect } from "react";
import { KEY_ENTER } from "../contans";

export default (onEnter) => {
  function handler(event) {
    if (event.keyCode === KEY_ENTER) {
      event.preventDefault();
      onEnter();
    }
  }

  return [handler];
};
