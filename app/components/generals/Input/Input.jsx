import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = (props) => {
  const { id, name, type } = props;

  return <input data-test="input" {...props} id={id} name={name} type={type} />;
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
