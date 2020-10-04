import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

function Loader() {  
  return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
}

Loader.propTypes = {
  
}

export default Loader;
