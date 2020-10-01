import React from 'react';
import { shallow } from 'enzyme';
import InputHandler from '../InputHandler/InputHandler';

describe('InputHandler render', () => {
  const Component = shallow(<InputHandler/>)

  it('rendering', () => {
    expect(Component).toBeTruthy();
  });

});
