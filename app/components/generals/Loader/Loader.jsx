import React from "react";
import PropTypes from "prop-types";
import "./Loader.css";

function Loader({ isVisible = false }) {
  return (
    <div
      className="lds-ring"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
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
