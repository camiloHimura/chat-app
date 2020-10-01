import React from 'react';
import { shallow } from 'enzyme';
import Messages from '../Messages/Messages';

describe('Messages render', () => {
  const Component = shallow(<Messages name={name}/>)

  it('rendering name', () => {
    expect(Component).toBeTruthy();
  });

});