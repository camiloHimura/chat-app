import React, { useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./Modal.css";
import { connect } from "react-redux";
import { toggleSettings } from "../../state/actions";
import Button from "../generals/Button";
import { useClickOutside } from "../../hooks";

const mapStateToProps = (state) => ({
  isSettingsOpen: state.settings.open,
});

const mapDispachToProps = (dispatch) => ({
  toggleSettings: (value) => dispatch(toggleSettings(value)),
});

export function Modal(props) {
  const { isSettingsOpen, toggleSettings } = props;
  const elemt = document.getElementById("modal");
  const ref = useRef(null);
  useClickOutside(ref, () => toggleSettings(false));

  let Component = (
    <div className="modal">
      <div className="body" ref={ref}>
        <Button
          text="X"
          className="close"
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
