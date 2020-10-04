import React from 'react';
import { mount } from 'enzyme';
import Img from './Img';
import { findByTestAttr } from '../../utils/test';
jest.mock('socket.io-client');

describe('Img', () => {
  let component;

  it('default value', () => {
    component = setUp();
    const img = findByTestAttr(component, 'img');

    expect(img.props().src).toBe(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='
    );
  });
});

function setUp(props = {}) {
  const initialProps = {
    src: '', ...props
  }

  return mount(<Img {...initialProps}/>);
};
