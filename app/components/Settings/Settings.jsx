import React from "react";
import PropTypes from "prop-types";
import "./Settings.css";
import Button from "./../Button";
import { connect } from "react-redux";
import {
  resetSettings,
  saveSettings,
  toggleSettings,
} from "../../state/actions";
import { SETTINGS } from "./../../contans";
import { useForm } from "./../../hooks";

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
        <input
          type="text"
          data-test="userName"
          name="userName"
          autoComplete="false"
          value={values.userName}
          onChange={handler}
        />
      </div>
      <h2 className="--marginBottom">Clock display</h2>
      <div className="--flex --marginBottom">
        <div className="--marginRight">
          <input
            id="hour-one"
            type="radio"
            name="timeFormat"
            value={SETTINGS.TIME_12}
            data-test="time-12"
            checked={values.timeFormat === SETTINGS.TIME_12}
            onChange={handler}
          />
          <label htmlFor="hour-one" className="--pointer">
            12 hours
          </label>
        </div>
        <div>
          <input
            id="hour-two"
            type="radio"
            name="timeFormat"
            value={SETTINGS.TIME_24}
            data-test="time-24"
            checked={values.timeFormat === SETTINGS.TIME_24}
            onChange={handler}
          />
          <label htmlFor="hour-two" className="--pointer">
            24 hours
          </label>
        </div>
      </div>

      <div className="separator"></div>

      <h2 className="--marginBottom">Send message on Ctrl/Cmd + Enter</h2>
      <div className="--flex --marginBottom">
        <div className="--marginRight">
          <input
            id="shorcut-one"
            type="radio"
            name="shortcut"
            value={true}
            data-test="shorcut-true"
            checked={values.shortcut}
            onChange={handler}
          />
          <label htmlFor="shorcut-one" className="--pointer">
            On
          </label>
        </div>
        <div>
          <input
            id="shorcut-two"
            type="radio"
            name="shortcut"
            value={false}
            data-test="shorcut-false"
            checked={!values.shortcut}
            onChange={handler}
          />
          <label htmlFor="shorcut-two" className="--pointer">
            Off
          </label>
        </div>
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

  saveSettings: PropTypes.func.isRequired,
  resetSettings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispachToProps)(Settings);
