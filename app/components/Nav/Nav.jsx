import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

import Button from './../Button';

function Nav(props) {

  return  <nav className=''>
            <h1>{props.name}</h1>
            <Button text='Setting' className='button' onClick={() => console.log('clicking')}/>
          </nav>

}

Nav.propTypes = {
  name: PropTypes.string.isRequired
}

export default Nav;
