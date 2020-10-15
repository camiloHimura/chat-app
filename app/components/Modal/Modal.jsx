import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./Modal.css";
import { connect } from "react-redux";
import { toggleSettings } from "../../state/actions";
import Button from "../Button";

const mapStateToProps = (state) => ({
  isSettingsOpen: state.settings.open,
});

const mapDispachToProps = (dispatch) => ({
  toggleSettings: (value) => dispatch(toggleSettings(value)),
});

export function Modal(props) {
  const { isSettingsOpen, toggleSettings } = props;
  const elemt = document.getElementById("modal");

  let Component = (
    <div className="modal">
      <div className="body">
        <Button
          className="close"
          text="X"
          onClick={() => toggleSettings(false)}
        />
        {props.children}
      </div>
    </div>
  );

  if (!isSettingsOpen) {
    Component = null;
  }

  return createPortal(Component, elemt);
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSettings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Modal);
