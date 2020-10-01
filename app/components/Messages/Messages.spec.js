import React from 'react';
import { shallow } from 'enzyme';
import Messages from './Messages';
import Card from '../Card';

describe('Messages render', () => {
  const Component = shallow(<Messages name={name}/>)

  it('rendering name', () => {
    expect(Component).toBeTruthy();
  });

  it('card child', () => {
    expect(Component.find(Card)).toBeTruthy();
  });

});
