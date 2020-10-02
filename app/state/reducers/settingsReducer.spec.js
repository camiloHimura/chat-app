import {setUserNameAction, setTimeFormat, setShortcut, resetSettings, toggleSettings} from '../actions';
import settingsReducer from './settingsReducer';
import { SETTINGS } from '../../contans';

import LStorage from '../../utils/LStorage';
jest.mock('../../utils/LStorage');

const settings = {
  userName: 'user test', 
  timeFormat: '24', 
  shortcut: false
}

describe('standar initial state', () => {
  it('set userName', () => {
    const newState = settingsReducer(undefined, setUserNameAction(settings.userName));
    expect(newState.userName).toBe(settings.userName);
  });

  it('set timeFormat', () => {
    const newState = settingsReducer(undefined, setTimeFormat(settings.timeFormat));
    expect(newState.timeFormat).toBe(settings.timeFormat);
  });

  it('set shortcut', () => {
    const newState = settingsReducer(undefined, setShortcut(settings.shortcut));
    expect(newState.shortcut).toBe(settings.shortcut); 
  });

  it('toogle true', () => {
    const newState = settingsReducer(undefined, toggleSettings(true));
    expect(newState.open).toBe(true); 
  });

  it('toogle false', () => {
    const newState = settingsReducer(undefined, toggleSettings(false));
    expect(newState.open).toBe(false); 
  });

  it('clear local storage', () => {
    const newState = settingsReducer({...settings, open: true}, resetSettings());
    expect(newState).toEqual({...SETTINGS.DEFAULTS, open: true});
  });
});

describe('localStorage initial state', () => {
  
  beforeEach(() => {
    LStorage.has.mockReturnValue(true);
    LStorage.get.mockReturnValue(settings);
  })

  it('return default store', () => {

    const newState = settingsReducer(undefined, {open: true});
    expect(newState.title).toBe(settings.title);
    expect(newState.url).toBe(settings.url);
    expect(newState.tags).toEqual(settings.tags);
  })
})
