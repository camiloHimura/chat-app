import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { findByTestAttr } from '../../utils/test';

describe('Card render', () => {
  let component;
  const info = {
    //2020-10-03, 16:13:36
    date: 1601734416154,
    isLocal: true,
    timeFormat: '24',
    text: 'text test',
    userName: 'name test', 
  }

  it('rendering info and text, 24 hours', () => {
    component = setUp({...info});
    const text = findByTestAttr(component, 'text');
    const metaData = findByTestAttr(component, 'metaData');
    
    expect(text.text()).toBe(info.text);
    expect(metaData.text()).toBe(`${info.userName}, 16:13:36`);
  });
  
  it('rendering info and text, 12 hours', () => {
    component = setUp({...info, timeFormat: '12'});
    const text = findByTestAttr(component, 'text');
    const metaData = findByTestAttr(component, 'metaData');
    
    expect(text.text()).toBe(info.text);
    expect(metaData.text()).toBe(`${info.userName}, 4:13:36 PM`);
  });

});

function setUp(props = {}) {
  const initialProps = {
    date: 123123, userName: '', text: '', isLocal: true, timeFormat: '12', ...props
  }

  return shallow(<Card {...initialProps}/>);
};
