import React from 'react';
import { mount } from 'enzyme';
import Img from './Img';
import { findByTestAttr } from '../../utils/test';
import { act } from 'react-dom/test-utils';

jest.mock('socket.io-client');

describe('Img', () => {
  let component;

  it('default value, render Loader', () => {
    component = setUp();
    const loader = findByTestAttr(component, 'loader');
    expect(loader).toHaveLength(1);
  });

  it('state updated after loading the image', done => {
    const spySetSrc = jest.fn();
    const srcTest = 'test Value';

    React.useState = (src) => ([src, spySetSrc]);

    global.Image = class Image {
      constructor(){
        setTimeout(() => {
          this.onload();
          expect(spySetSrc).toHaveBeenCalledWith(srcTest);
          done();
        }, 0)
      }
    }

    component = setUp({src: srcTest});
  });
});

function setUp(props = {}) {
  const initialProps = {
    src: '', ...props
  }

  return mount(<Img {...initialProps}/>);
};
