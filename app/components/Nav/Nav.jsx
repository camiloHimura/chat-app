import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
import {connect} from "react-redux";
import {toggleSettings} from "../../state/actions";
import Button from './../Button';

const mapDispachToProps = dispatch => ({
  toggleSettings: isOpen => dispatch(toggleSettings(isOpen)),
});
export function Nav(props) {
  const {toggleSettings} = props;

  return  <nav>
            <h1 data-test="name">{props.name}</h1>
            <Button 
              text='Setting' 
              className='button' 
              data-test="toggle"
              onClick={() => toggleSettings(true)}
            />
          </nav>

}

Nav.propTypes = {
  name: PropTypes.string.isRequired,
  toggleSettings: PropTypes.func.isRequired
}


export default connect(null, mapDispachToProps)(Nav);