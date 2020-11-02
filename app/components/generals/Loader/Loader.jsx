import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

function Loader({ isVisible = false, className = "" }) {
  return (
    <div
      className={`lds-ring ${className}`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

Loader.propTypes = {};

export default Loader;
