import React from "react";
import PropTypes from "prop-types";
import "./Settings.css";
import Button from "../generals/Button";
import { connect } from "react-redux";
import {
  resetSettings,
  saveSettings,
  toggleSettings,
} from "../../state/actions";
import { SETTINGS } from "./../../contans";
import { useForm } from "./../../hooks";
import InputText from "./../generals/InputText";
import InputRadio from "./../generals/InputRadio";

const mapStateToProps = (state) => ({
  shortcut: state.settings.shortcut,
  timeFormat: state.settings.timeFormat,
  userName: state.settings.userName,
});

const mapDispachToProps = (dispatch) => ({
  resetSettings: () => dispatch(resetSettings()),
  saveSettings: (name) => dispatch(saveSettings(name)),
  toggleSettings: (value) => dispatch(toggleSettings(value)),
});

export function Settings(props) {
  const {
    userName,
    shortcut,
    timeFormat,
    resetSettings,
    saveSettings,
    toggleSettings,
  } = props;

  const [values, handler] = useForm({ shortcut, timeFormat, userName }, [
    shortcut,
    timeFormat,
    userName,
  ]);

  function onSave() {
    saveSettings(values);
    toggleSettings(false);
  }

  function onReset() {
    resetSettings();
  }

  return (
    <div className="settings">
      <h2 className="--marginBottom">User Name</h2>
      <div className="--flex --marginBottom">
        <InputText
          name="userName"
          onChange={handler}
          value={values.userName}
          onEnter={onSave}
        />
      </div>
      <h2 className="--marginBottom">Clock display</h2>
      <div className="--flex --marginBottom">
        <InputRadio
          name="timeFormat"
          onChange={handler}
          className="--marginRight"
          selectedValue={values.timeFormat}
          values={[
            { value: SETTINGS.TIME_12, label: "12 hours" },
            { value: SETTINGS.TIME_24, label: "24 hours" },
          ]}
        />
      </div>

      <div className="separator"></div>

      <h2 className="--marginBottom">Send message on Ctrl/Cmd + Enter</h2>
      <div className="--flex --marginBottom">
        <InputRadio
          name="shortcut"
          onChange={handler}
          className="--marginRight"
          selectedValue={values.shortcut}
          values={[
            { value: true, label: "On" },
            { value: false, label: "Off" },
          ]}
        />
      </div>

      <div className="separator"></div>

      <div className="--flex --flexBetween">
        <Button
          className="reset"
          text="Reset to default"
          onClick={onReset}
          data-test="btn-reset"
        />
        <Button
          className="save"
          text="Save"
          onClick={onSave}
          data-test="btn-save"
        />
      </div>
    </div>
  );
}

Settings.propTypes = {
  shortcut: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,

  toggleSettings: PropTypes.func.isRequired,
  saveSettings: PropTypes.func.isRequired,
  resetSettings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Settings);
