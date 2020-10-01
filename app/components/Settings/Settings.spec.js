import React from 'react';
import { shallow } from 'enzyme';
import Settings from '../Settings';

describe('Settings render', () => {
  const name = 'test name';
  const Component = shallow(<Settings isOpen={true}/>)

  it('rendering name', () => {
    expect(Component).toBeTruthy();
  });

});
