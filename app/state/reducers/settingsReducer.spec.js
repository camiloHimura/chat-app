import {setUserNameAction, setTimeFormat, setShortcut, resetSettings} from '../actions';
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
  it('return default store', () => {
    const newState = settingsReducer(undefined, {});
    expect(newState).toEqual(SETTINGS.DEFAULTS);
  });

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

  it('clear local storage', () => {
    const newState = settingsReducer(settings, resetSettings());
    expect(newState).toEqual(SETTINGS.DEFAULTS);
  });
});

describe('localStorage initial state', () => {
  
  beforeEach(() => {
    LStorage.has.mockReturnValue(true);
    LStorage.get.mockReturnValue(settings);
  })

  it('return default store', () => {

    const newState = settingsReducer(undefined, {});
    expect(newState.title).toBe(settings.title);
    expect(newState.url).toBe(settings.url);
    expect(newState.tags).toEqual(settings.tags);
  })
})
