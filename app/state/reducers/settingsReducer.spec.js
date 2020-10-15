import { resetSettings, toggleSettings, saveSettings } from "../actions";
import settingsReducer from "./settingsReducer";
import { SETTINGS } from "../../contans";
jest.mock("socket.io-client");
import LStorage from "../../utils/LStorage";
jest.mock("../../utils/LStorage");

const settings = {
  userName: "user test",
  timeFormat: "24",
  shortcut: false,
};

describe("standar initial state", () => {
  it("saveSettings", () => {
    const newState = settingsReducer(undefined, saveSettings(settings));
    expect(newState.shortcut).toBe(settings.shortcut);
    expect(newState.userName).toBe(settings.userName);
    expect(newState.timeFormat).toBe(settings.timeFormat);
  });

  it("toogle true", () => {
    const newState = settingsReducer(undefined, toggleSettings(true));
    expect(newState.open).toBe(true);
  });

  it("toogle false", () => {
    const newState = settingsReducer(undefined, toggleSettings(false));
    expect(newState.open).toBe(false);
  });

  it("clear local storage", () => {
    const newState = settingsReducer(
      { ...settings, open: true },
      resetSettings()
    );
    expect(newState).toEqual({ ...SETTINGS.DEFAULTS, open: true });
  });
});

describe("localStorage initial state", () => {
  beforeEach(() => {
    LStorage.has.mockReturnValue(true);
    LStorage.get.mockReturnValue(settings);
  });

  it("return default store", () => {
    const newState = settingsReducer(undefined, { open: true });
    expect(newState.title).toBe(settings.title);
    expect(newState.url).toBe(settings.url);
    expect(newState.tags).toEqual(settings.tags);
  });
});
