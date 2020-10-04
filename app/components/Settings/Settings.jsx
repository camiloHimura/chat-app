import React from 'react';
import PropTypes from 'prop-types';
import './Settings.css';
import Button from './../Button';
import {connect} from 'react-redux';
import {setTimeFormat, setShortcut, resetSettings, setUserName} from '../../state/actions';
import {SETTINGS} from './../../contans';

const mapStateToProps = state => ({
  shortcut: state.settings.shortcut,
  timeFormat: state.settings.timeFormat,
  userName: state.settings.userName,
});

const mapDispachToProps = dispatch => ({
  resetSettings: () => dispatch(resetSettings()),
  setUserName: name => dispatch(setUserName(name)),
  setShortcut: isOn => dispatch(setShortcut(isOn)),
  setTimeFormat: format => dispatch(setTimeFormat(format)),
});

export function Settings(props){
  const {userName, shortcut, timeFormat, setTimeFormat, setShortcut, resetSettings, setUserName} = props;

  function onTimeChange(event) {
    setTimeFormat(event.target.value);
  }

  function onShorcutChange(event) {
    setShortcut(event.target.value === 'true');
  }

  function onResetSettings() {
    resetSettings();
  }

  function onChanUserName(event) {
    console.log('event.target.value', event.target.value)
    setUserName(event.target.value);
  }

  return  <div className='settings'>
            <h2 className='--marginBottom'>User Name</h2>
            <div className='--flex --marginBottom'>
              <input type='text' data-test='userName' value={userName} onChange={onChanUserName}/>
            </div>
            <h2 className='--marginBottom'>Clock display</h2>
            <div className='--flex --marginBottom'>
              <div className='--marginRight'>
                <input id='hour-one' 
                  type='radio' 
                  name='hour' 
                  value={SETTINGS.TIME_12}
                  data-test='time-12'
                  checked={timeFormat === SETTINGS.TIME_12}
                  onChange={onTimeChange}
                />
                <label htmlFor='hour-one' className='--pointer'>12 hours</label>
              </div>
              <div>
                <input id='hour-two' 
                  type='radio' 
                  name='hour' 
                  value={SETTINGS.TIME_24}
                  data-test='time-24'
                  checked={timeFormat === SETTINGS.TIME_24}
                  onChange={onTimeChange}
                />
                <label htmlFor='hour-two' className='--pointer'>24 hours</label>
              </div>
            </div>

            <div className='separator'></div>            

            <h2 className='--marginBottom'>Send message on Ctrl/Cmd + Enter</h2>
            <div className='--flex --marginBottom'>
              <div className='--marginRight'>
                <input id='shorcut-one' 
                  type='radio' 
                  name='shortcut' 
                  value={true}
                  data-test='shorcut-true'
                  checked={shortcut}
                  onChange={onShorcutChange}
                />
                <label htmlFor='shorcut-one' className='--pointer'>On</label>
              </div>
              <div>
                <input id='shorcut-two' 
                  type='radio' 
                  name='shortcut' 
                  value={false}
                  data-test='shorcut-false'
                  checked={!shortcut}
                  onChange={onShorcutChange}
                />
                <label htmlFor='shorcut-two' className='--pointer'>Off</label>
              </div>
            </div>

            <div className='separator'></div>

            <div className='--flex --flexCenter'>
              <Button 
                className='reset' 
                text='Reset to default' 
                onClick={onResetSettings}
                data-test='btn-reset'
              />
            </div>
          </div>
}

Settings.propTypes = {
  shortcut: PropTypes.bool.isRequired,
  timeFormat: PropTypes.string.isRequired,

  setTimeFormat: PropTypes.func.isRequired,
  setShortcut: PropTypes.func.isRequired,
  resetSettings: PropTypes.func.isRequired,  
}

export default connect(mapStateToProps, mapDispachToProps)(Settings);
