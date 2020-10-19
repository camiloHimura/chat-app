import React from "react";
import { shallow } from "enzyme";
import { Settings } from "./Settings";
import { findByTestAttr } from "../../utils/test";
jest.mock("socket.io-client");

const resetSettings = jest.fn();
const saveSettings = jest.fn();
const toggleSettings = jest.fn();

describe("Settings render", () => {
  let component;

  describe("Events", () => {
    beforeEach(() => {
      resetSettings.mockClear();
      toggleSettings.mockClear();
    });

    it("changing saveSettings", () => {
      const camilo = {
        shortcut: true,
        timeFormat: "24",
        userName: "userName test",
      };

      component = setUp({
        saveSettings,
        toggleSettings,
        timeFormat: camilo.timeFormat,
        shortcut: camilo.shortcut,
        userName: camilo.userName,
      });

      findByTestAttr(component, "btn-save").simulate("click");
      expect(saveSettings).toHaveBeenCalledWith(camilo);
      expect(toggleSettings).toHaveBeenCalledWith(false);
    });

    it("changing resetSettings", () => {
      component = setUp({ resetSettings });
      findByTestAttr(component, "btn-reset").simulate("click");
      expect(resetSettings).toHaveBeenCalled();
    });
  });
});

function setUp(props = {}) {
  const initialProps = {
    shortcut: true,
    userName: "",
    timeFormat: "",
    saveSettings: () => {},
    resetSettings: () => {},
    toggleSettings: () => {},
    ...props,
  };
  return shallow(<Settings {...initialProps} />);
}
