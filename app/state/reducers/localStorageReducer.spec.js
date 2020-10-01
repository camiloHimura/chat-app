import {setLsUserNameAction, setLsTitleFormat, setLsShortcut, clearLsAction} from '../actions';
import localStorageReducer from './localStorageReducer';
import { SETTINGS_DEFAULTS } from '../../contans/LStorageNames';

import LStorage from '../../utils/LStorage';
jest.mock('../../utils/LStorage');

const settings = {
  userName: 'user test', 
  timeFormat: '24', 
  shortcut: false
}

describe('standar initial state', () => {
  it('return default store', () => {
    const newState = localStorageReducer(undefined, {});
    expect(newState).toEqual(SETTINGS_DEFAULTS);
  });

  it('set userName', () => {
    const newState = localStorageReducer(undefined, setLsUserNameAction(settings.userName));
    expect(newState.userName).toBe(settings.userName);
  });

  it('set timeFormat', () => {
    const newState = localStorageReducer(undefined, setLsTitleFormat(settings.timeFormat));
    expect(newState.timeFormat).toBe(settings.timeFormat);
  });

  it('set shortcut', () => {
    const newState = localStorageReducer(undefined, setLsShortcut(settings.shortcut));
    expect(newState.shortcut).toBe(settings.shortcut); 
  });

  it('clear local storage', () => {
    const newState = localStorageReducer(settings, clearLsAction());
    expect(newState).toEqual(SETTINGS_DEFAULTS);
  });
});

describe('localStorage initial state', () => {
  
  beforeEach(() => {
    LStorage.has.mockReturnValue(true);
    LStorage.get.mockReturnValue(settings);
  })

  it('return default store', () => {

    const newState = localStorageReducer(undefined, {});
    expect(newState.title).toBe(settings.title);
    expect(newState.url).toBe(settings.url);
    expect(newState.tags).toEqual(settings.tags);
  })
})
