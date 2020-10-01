import React from 'react';
import PropTypes from 'prop-types';
import './Settings.css';

function Settings(props) {
  const {isOpen} = props;
  
  if (!isOpen) {  
    return null 
  };

  return  <div className='settings'>
            <h2>Clock display</h2>
            <div>
              <input id='hour-one' type='radio' name='hour'></input>
              <label for='hour-one'>12 hours</label>
            </div>
            <div>
              <input id='hour-two' type='radio' name='hour'></input>
              <label for='hour-two'>24 hours</label>
            </div>

            <h2>Send message on Ctrl/Cmd + Enter</h2>
            <div>
              <input id='shorcut-one' type='radio' name='shortcut'></input>
              <label for='shorcut-one'>On</label>
            </div>
            <div>
              <input id='shorcut-two' type='radio' name='shortcut'></input>
              <label for='shorcut-two'>Off</label>
            </div>

            <div>
              <button>Reset to default</button>
            </div>
          </div>

}

Settings.propTypes = {
  
}

export default Settings;
