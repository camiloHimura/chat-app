import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './InputHandler.css';
import Button from './../Button';
import { addMessage } from '../../state/actions';
import { KEY_ENTER } from '../../contans';

const mapStateToProps = state => ({
  shortcut: state.settings.shortcut,
  userName: state.settings.userName,
});

const mapDispachToProps = dispatch => ({
  addMessage: data => dispatch(addMessage(data)),
});

export function InputHandler(props) {
  const {shortcut, userName, addMessage} = props;
  const inputText = React.useRef(null);

  function keyDown (event) {
    if (!shortcut && event.keyCode === KEY_ENTER) {
      event.preventDefault();
      validateMessage();
    }
    
    const isControlPress = event.ctrlKey || event.metaKey;
    if (shortcut && isControlPress && event.keyCode === KEY_ENTER) {
      event.preventDefault();
      validateMessage();
    }
  }

  function validateMessage() {
    const text = inputText.current.value;
    if(text === ''){
      return;
    };

    const date = Date.now();
    const isLocal = true;
    inputText.current.value = '';
    addMessage({userName, date, text, isLocal});
    
  }

  return  <div className='inputHandler'>
            <textarea 
              data-test='text' 
              ref={inputText}
              onKeyDown={keyDown}
            ></textarea>
            <Button 
              text='Send'
              className='button'
              data-test='btn-send'
              onClick={validateMessage}
            />
          </div>
}

InputHandler.propTypes = {
  shortcut: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispachToProps)(InputHandler);
