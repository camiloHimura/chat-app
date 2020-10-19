import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

function Button(props) {
  const {className = '', text = '', onClick} = props;

  return  <button
            data-test='button'
            className={className}
            onClick={onClick}
          >
            {text}
          </button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;
