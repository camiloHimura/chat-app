import React from "react";
import PropTypes from "prop-types";
import "./InputText.css";
import Input from "../Input";
import { useEnter } from "../../../hooks";

function InputText(props) {
  const { name, onChange, value, onEnter = () => {} } = props;
  const [handler] = useEnter(onEnter);

  return (
    <Input
      id={name}
      name={name}
      value={value}
      type="text"
      onKeyDown={handler}
      onChange={onChange}
    />
  );
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
