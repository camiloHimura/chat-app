import React from "react";
import PropTypes from "prop-types";
import "./InputRadio.css";
import Input from "../Input";

function InputRadio(props) {
  const { name, onChange, values = [], selectedValue, className = "" } = props;

  return values.map(({ value, label }, index) => (
    <span key={`${name}-${index}`}>
      <Input
        name={name}
        type="radio"
        value={value}
        data-test="radio"
        onChange={onChange}
        id={`${name}-${index}`}
        checked={value === selectedValue}
      />
      <label
        data-test="label"
        htmlFor={`${name}-${index}`}
        className={`--pointer ${className}`}
      >
        {label}
      </label>
    </span>
  ));
}

InputRadio.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
      label: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
};

export default InputRadio;
