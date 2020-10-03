import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from './Settings';
import { findByTestAttr } from '../../utils/test';

const setShortcut = jest.fn();
const resetSettings = jest.fn();
const setTimeFormat = jest.fn();
const setUserName = jest.fn();

describe('Settings render', () => {
  let component;

  it('time format 12 is cheked', () => {
    component = setUp({timeFormat: '12'});
    const input = findByTestAttr(component, 'time-12').getElement();
    expect(input.props.checked).toBe(true);
  });

  it('time format 24 is cheked', () => {
    component = setUp({timeFormat: '24'});
    const input = findByTestAttr(component, 'time-24').getElement();
    expect(input.props.checked).toBe(true);
  });

  it('shortcut true is cheked', () => {
    component = setUp({shortcut: true});
    const input = findByTestAttr(component, 'shorcut-true').getElement();
    expect(input.props.checked).toBe(true);
  });

  it('shortcut false is cheked', () => {
    component = setUp({shortcut: false});
    const input = findByTestAttr(component, 'shorcut-false').getElement();
    expect(input.props.checked).toBe(true);
  });

  describe('Events', () => {
    beforeEach(() => {
      setShortcut.mockClear();
      resetSettings.mockClear();
      setTimeFormat.mockClear();
    });

    it('changing setShortcut', () => {
      component = setUp({shortcut: false, setShortcut});
      const input = findByTestAttr(component, 'shorcut-true');
      input.simulate('change', { target: { value: 'true' } });
      expect(setShortcut).toHaveBeenCalledWith(true);
    });

    it('changing setTimeFormat', () => {
      component = setUp({timeFormat: '12', setTimeFormat});
      const value = '24';
      const input = findByTestAttr(component, 'time-24');
      input.simulate('change', { target: { value } });
      expect(setTimeFormat).toHaveBeenCalledWith(value);
    });

    it('changing resetSettings', () => {
      component = setUp({resetSettings});
      const input = findByTestAttr(component, 'btn-reset');
      input.simulate('click');
      expect(resetSettings).toHaveBeenCalled();
    });

    it('changing setUserName', () => {
      const value = 'user test';
      component = setUp({setUserName});
      const input = findByTestAttr(component, 'userName');
      input.simulate('change', { target: { value } });
      expect(setUserName).toHaveBeenCalledWith(value);
    });
  });
});

function setUp(props = {}) {
  const initialProps = {
    shortcut: true, timeFormat: '', setTimeFormat: ()=>{} , setShortcut: ()=>{}, resetSettings: ()=>{}, ...props
  }
  return shallow(<Settings {...initialProps}/>);
};
