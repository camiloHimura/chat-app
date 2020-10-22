import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./InputHandler.css";
import Button from "./../generals/Button";
import EnhancedInputText from "./../generals/EnhancedInputText";
import { addMessage } from "../../state/actions";
import { IO_BROADCAST, SOCKET } from "../../contans";
import { useEnhancedEnter } from "../../hooks";

const mapStateToProps = (state) => ({
  shortcut: state.settings.shortcut,
  userName: state.settings.userName,
});

const mapDispachToProps = (dispatch) => ({
  addMessage: (data) => dispatch(addMessage(data)),
});

export function InputHandler(props) {
  const { shortcut, userName, addMessage } = props;
  const inputText = React.useRef("");

  useEffect(() => {
    SOCKET.on(IO_BROADCAST, (data) => {
      addMessage(data);
    });

    return () => SOCKET.disconnect();
  }, []);

  const enterHandler = useEnhancedEnter(!shortcut, validateMessage);

  function validateMessage() {
    const text = inputText.current.innerText;
    if (text === "") {
      return;
    }

    const date = Date.now();
    const isLocal = true;
    inputText.current.innerText = "";
    inputText.current.focus();
    addMessage({ userName, date, text, isLocal });
  }

  return (
    <div className="inputHandler">
      <EnhancedInputText
        ref={inputText}
        className="input"
        onEnter={enterHandler}
      />
      <Button
        text="Send"
        className="button"
        data-test="btn-send"
        onClick={validateMessage}
      />
    </div>
  );
}

InputHandler.propTypes = {
  shortcut: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(InputHandler);
