import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../Nav/Nav';

describe('Nav render', () => {
  const name = 'test name';
  const Component = shallow(<Nav name={name}/>)

  it('rendering name', () => {
    expect(Component.find('h1').text()).toEqual(name);
  });

});
