import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';
import { findByTestAttr } from '../../utils/test';
jest.mock('socket.io-client');

const toggleSettings = jest.fn();

describe('Nav render', () => {
  let component;

  it('rendering name', () => {
    const name = 'test'
    component = setUp({name});
    expect(findByTestAttr(component, 'name').text()).toEqual(name);
  });

  it('clicking setting button', () => {
    component = setUp({name: 'test', toggleSettings});
    findByTestAttr(component, 'toggle').simulate('click');
    expect(toggleSettings).toHaveBeenCalled();
  });

});

function setUp(props = {}) {
  const initialProps = {
    name: true, toggleSettings: ()=>{}, ...props
  }
  return shallow(<Nav {...initialProps}/>);
};
