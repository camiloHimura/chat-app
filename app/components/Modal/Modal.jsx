import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import './Modal.css';

function Modal(props) {
  const {isOpen} = props;
  const elemt = document.getElementById('modal');

  let Component = <div className='modal'>
                    <div className='body'>
                      <button className='close'>X</button>
                      {props.children}
                    </div>
                  </div>

  if (!isOpen) {
    Component = null;
  }

  return createPortal(
    Component,
    elemt
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;
