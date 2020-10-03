import React from 'react';
import { shallow } from 'enzyme';
import { Messages } from './Messages';
import Card from '../Card';

describe('Messages render', () => {
  let component;
  const card = {date: 1234, userName: 'name test', text: '', url: '', isLocal: true}
  
  it('render Card childern', () => {
    component = setUp({messages: [card, card, card]})
    expect(component.find(Card).length).toBe(3);
  });

  it('passing down timeFormat', () => {
    component = setUp({messages: [card], timeFormat: '24'})
    expect(component.find(Card).at(0).props().timeFormat).toBe('24');
  });

});

function setUp(props = {}) {
  const initialProps = {
    messages: [], timeFormat: '12', ...props
  }
  return shallow(<Messages {...initialProps}/>);
};
