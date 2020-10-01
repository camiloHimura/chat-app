import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card/Card';

describe('Card render', () => {
  const info = {type: 'text', date: Date.now(), user: 'guest', isLocal: true, text: '6 test text', url: ''};
  const Component = shallow(<Card {...info}/>)

  it('rendering name', () => {
    expect(Component).toBeTruthy();
  });

});
