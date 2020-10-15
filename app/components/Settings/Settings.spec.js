import React from "react";
import { shallow } from "enzyme";
import { Settings } from "./Settings";
import { findByTestAttr } from "../../utils/test";
jest.mock("socket.io-client");

const resetSettings = jest.fn();
const saveSettings = jest.fn();

describe("Settings render", () => {
  let component;

  it("time format 12 is cheked", () => {
    component = setUp({ timeFormat: "12" });
    const input = findByTestAttr(component, "time-12").getElement();
    expect(input.props.checked).toBe(true);
  });

  it("time format 24 is cheked", () => {
    component = setUp({ timeFormat: "24" });
    const input = findByTestAttr(component, "time-24").getElement();
    expect(input.props.checked).toBe(true);
  });

  it("shortcut true is cheked", () => {
    component = setUp({ shortcut: true });
    const input = findByTestAttr(component, "shorcut-true").getElement();
    expect(input.props.checked).toBe(true);
  });

  it("shortcut false is cheked", () => {
    component = setUp({ shortcut: false });
    const input = findByTestAttr(component, "shorcut-false").getElement();
    expect(input.props.checked).toBe(true);
  });

  describe("Events", () => {
    beforeEach(() => {
      resetSettings.mockClear();
    });

    it("changing saveSettings", () => {
      const camilo = {
        shortcut: true,
        timeFormat: "24",
        userName: "userName test",
      };

      component = setUp({
        saveSettings,
        timeFormat: camilo.timeFormat,
        shortcut: camilo.shortcut,
        userName: camilo.userName,
      });

      findByTestAttr(component, "btn-save").simulate("click");
      expect(saveSettings).toHaveBeenCalledWith(camilo);
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
    ...props,
  };
  return shallow(<Settings {...initialProps} />);
}
