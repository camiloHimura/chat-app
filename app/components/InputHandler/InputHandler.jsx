import React from 'react';
import PropTypes from 'prop-types';
import './InputHandler.css';
import Button from './../Button';

function InputHandler(props) {

  return  <div className='inputHandler'>
            <input type="text" data-test="input"/>
            <Button 
              text='Send'
              className='button'
              onClick={() => console.log('clicking')}
            />
          </div>
}

InputHandler.propTypes = {
}

export default InputHandler;
