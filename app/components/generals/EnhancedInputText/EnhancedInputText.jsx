import React from "react";
import PropTypes from "prop-types";
import "./EnhancedInputText.css";

const EnhancedInputText = React.forwardRef((props, ref) => (
  <span
    ref={ref}
    role="textbox"
    data-test="text"
    contentEditable={true}
    onKeyDown={props.onEnter}
    className={props.className}
  ></span>
));

EnhancedInputText.propTypes = {
  className: PropTypes.string,
  onEnter: PropTypes.func.isRequired,
};

export default EnhancedInputText;
